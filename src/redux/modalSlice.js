import { requeestBookById } from 'services/api';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
export const fetchBookById = createAsyncThunk(
  'book/bookById',
  async (bookId, thunkApi) => {
    try {
      const bookById = await requeestBookById(bookId);
      return bookById;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  isOpen: false,
  selectedCardId: null,
  bookDetails: null,
  isLoading: false,
  error: null,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedCardId = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.selectedCardId = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBookById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.bookDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
