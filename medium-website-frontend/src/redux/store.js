import { configureStore } from '@reduxjs/toolkit';
import userReducer from './User/UserSlice.js';
import postReducer from './Post/PostSlice.js'
import commentReducer from './Comment/CommentSlice.js'
import postsReducer from './Post/AllPosts.js'



export const store = configureStore({
    reducer: {
      user: userReducer,
      post: postReducer,
      comment: commentReducer,
      posts: postsReducer
    },
  });  
