import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async (userId, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:8080/users/${userId}`);
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

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getUser.fulfilled, (state, action) => {
      const { userId, userName } = action.payload;
      // Kullanıcı adını post nesnesine ekleyin
      state.postList.forEach(post => {
          if (post.userId === userId) {
              post.userName = userName;
          }
      });
      state.loading = false;
      state.error = null;
  })
  
  .addCase(getUser.pending, (state) => {
    state.loading = true;
    state.error = null;
  })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
