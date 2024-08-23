import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Adjust this path if your slice is elsewhere

export const store = configureStore({
  reducer: {
    user: userReducer,
    // Add other reducers here as needed
  },
});
