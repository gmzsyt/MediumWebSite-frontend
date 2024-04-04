import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice.js';
import postReducer from './Post/PostSlice.js'
import commentReducer from './Comment/CommentSlice.js'



export const store = configureStore({
    reducer: {
      user: userReducer,
      post: postReducer,
      comment: commentReducer
    },
  });  
