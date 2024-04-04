import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice.js';
import postReducer from './Post/PostSlice.js'


export const store = configureStore({
    reducer: {
      user: userReducer,
      post: postReducer,
    },
  });  
