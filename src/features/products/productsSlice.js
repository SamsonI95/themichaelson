import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  updateDoc,
  query,
  orderBy,
  Timestamp
} from 'firebase/firestore';
import { db } from '../../services/firebase';
import { uploadImage } from '../../services/uploadService';
import { defaultCollectionProducts } from '../../data/defaultCollectionProducts';

// Async thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        const timestamp = Timestamp.now();
        const seededProducts = await Promise.all(
          defaultCollectionProducts.map(async (product) => {
            const docRef = await addDoc(collection(db, 'products'), {
              ...product,
              imagePublicId: '',
              createdAt: timestamp,
              updatedAt: timestamp,
            });

            return {
              id: docRef.id,
              ...product,
              imagePublicId: '',
              createdAt: timestamp,
              updatedAt: timestamp,
            };
          })
        );

        return seededProducts;
      }

      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      return products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ productData, imageFile }, { rejectWithValue }) => {
    try {
      let uploadResult = {
        imageUrl: '',
        imagePublicId: '',
      };
      
      if (imageFile) {
        uploadResult = await uploadImage(imageFile);
      }
      
      const timestamp = Timestamp.now();
      const docRef = await addDoc(collection(db, 'products'), {
        ...productData,
        ...uploadResult,
        createdAt: timestamp,
        updatedAt: timestamp,
      });
      
      return {
        id: docRef.id,
        ...productData,
        ...uploadResult,
        createdAt: timestamp,
        updatedAt: timestamp,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, productData, imageFile, existingImageUrl = '', existingImagePublicId = '' }, { rejectWithValue }) => {
    try {
      let uploadResult = {
        imageUrl: existingImageUrl,
        imagePublicId: existingImagePublicId,
      };
      
      if (imageFile) {
        uploadResult = await uploadImage(imageFile);
      }
      
      const productRef = doc(db, 'products', id);
      const updatedAt = Timestamp.now();
      await updateDoc(productRef, {
        ...productData,
        ...uploadResult,
        updatedAt,
      });
      
      return {
        id,
        ...productData,
        ...uploadResult,
        updatedAt,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
    uploadProgress: 0,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add product
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = { ...state.items[index], ...action.payload };
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = productsSlice.actions;
export default productsSlice.reducer;
