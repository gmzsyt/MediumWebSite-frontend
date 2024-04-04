import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice.js';


export const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });  
