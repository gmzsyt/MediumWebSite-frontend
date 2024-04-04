import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  comment: [],
  loading: false,
  error: null,
};

export const getComment = createAsyncThunk(
  'comments/getComment',
  async (postId, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/comments?postId=${postId}`);
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


export const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getComment.fulfilled, (state, action) => {
      state.comment = action.payload;
      state.loading = false;
      state.error = null;
  })
  
  .addCase(getComment.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
      .addCase(getComment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default commentSlice.reducer;
