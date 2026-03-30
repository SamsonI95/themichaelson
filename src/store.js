import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import inquiriesReducer from './features/inquiries/inquiriesSlice';
import productsReducer from './features/products/productsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    inquiries: inquiriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types for Firebase Timestamp objects
        ignoredActions: ['inquiries/fetchInquiries/fulfilled', 'products/fetchProducts/fulfilled'],
        ignoredPaths: ['inquiries.items', 'products.items'],
      },
    }),
});