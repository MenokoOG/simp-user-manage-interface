import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../data/mockData';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    usersList: users,
  },
  reducers: {
    setUsersList: (state, action) => {
      state.usersList = action.payload;
    },
    addUser: (state, action) => {
      state.usersList.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.usersList.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.usersList[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.usersList = state.usersList.filter(user => user.id !== action.payload);
    },
  },
});

export const { setUsersList, addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
