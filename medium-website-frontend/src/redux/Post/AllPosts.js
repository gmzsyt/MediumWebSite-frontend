import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: {},
  loading: false,
  error: null,
};

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/posts`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
  })
  
  .addCase(getPosts.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postsSlice.reducer;
