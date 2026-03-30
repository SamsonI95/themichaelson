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

// Async thunks
export const fetchInquiries = createAsyncThunk(
  'inquiries/fetchInquiries',
  async (_, { rejectWithValue }) => {
    try {
      const q = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const inquiries = [];
      querySnapshot.forEach((doc) => {
        inquiries.push({ id: doc.id, ...doc.data() });
      });
      return inquiries;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addInquiry = createAsyncThunk(
  'inquiries/addInquiry',
  async (inquiryData, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(db, 'inquiries'), {
        ...inquiryData,
        read: false,
        createdAt: Timestamp.now(),
      });
      
      return {
        id: docRef.id,
        ...inquiryData,
        read: false,
        createdAt: Timestamp.now(),
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const markAsRead = createAsyncThunk(
  'inquiries/markAsRead',
  async ({ id, read }, { rejectWithValue }) => {
    try {
      const inquiryRef = doc(db, 'inquiries', id);
      await updateDoc(inquiryRef, { read });
      return { id, read };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteInquiry = createAsyncThunk(
  'inquiries/deleteInquiry',
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(db, 'inquiries', id));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const inquiriesSlice = createSlice({
  name: 'inquiries',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch inquiries
      .addCase(fetchInquiries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInquiries.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchInquiries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Add inquiry
      .addCase(addInquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addInquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Mark as read
      .addCase(markAsRead.fulfilled, (state, action) => {
        const inquiry = state.items.find(item => item.id === action.payload.id);
        if (inquiry) {
          inquiry.read = action.payload.read;
        }
      })
      // Delete inquiry
      .addCase(deleteInquiry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteInquiry.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload);
      })
      .addCase(deleteInquiry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = inquiriesSlice.actions;
export default inquiriesSlice.reducer;
