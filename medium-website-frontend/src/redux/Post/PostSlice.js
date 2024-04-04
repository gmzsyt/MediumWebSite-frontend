import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  post: {},
  loading: false,
  error: null,
};

export const getPost = createAsyncThunk(
  'posts/getPost',
  async (postId, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/posts/${postId}`);
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


export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getPost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.loading = false;
      state.error = null;
  })
  
  .addCase(getPost.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
      .addCase(getPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postSlice.reducer;
