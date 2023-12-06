import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  requeestBookByCategory,
  requeestCategoryList,
  requeestTopBooks,
} from 'services/api';

export const fetchCategoryList = createAsyncThunk(
  'book/allCategories',
  async (_, thunkApi) => {
    try {
      const allCategories = await requeestCategoryList();
      return allCategories;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTopBooks = createAsyncThunk(
  'book/topBooks',
  async (_, thunkApi) => {
    try {
      const topBooks = await requeestTopBooks();
      return topBooks;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchBookByCategory = createAsyncThunk(
  'book/bookByCategory',
  async (category, thunkApi) => {
    try {
      const bookByCategory = await requeestBookByCategory(category);
      console.log(bookByCategory);
      return bookByCategory;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// 1 render AllCategoriesList(console.log) -> useEffect + dispatch -> pending(console.log) -> fullfilled(console.log)
// pending -> fullfilled | rejected

const INITIAL_STATE = {
  books: {
    items: [],
    isLoading: false,
    error: null,
  },
  booksByCategory: {
    items: [],
    isLoading: false,
    error: null,
  },
  categories: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const bookShelfSlice = createSlice({
  name: 'bookShelf',
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      .addCase(fetchCategoryList.pending, (state, action) => {
        state.categories.isLoading = true;
        state.categories.error = null;
      })
      .addCase(fetchCategoryList.fulfilled, (state, action) => {
        state.categories.items = action.payload;
        state.categories.isLoading = false;
      })
      .addCase(fetchCategoryList.rejected, (state, action) => {
        state.categories.isLoading = false;
        state.categories.error = action.payload;
      })
      //   -----------TOP BOOKS-----------
      .addCase(fetchTopBooks.pending, (state, action) => {
        state.books.isLoading = true;
        state.books.error = null;
      })

      .addCase(fetchTopBooks.fulfilled, (state, action) => {
        state.books.items = action.payload;
        state.books.isLoading = false;
      })
      .addCase(fetchTopBooks.rejected, (state, action) => {
        state.books.isLoading = false;
        state.books.error = action.payload;
      })
      //   -----------BookByCategory-----------
      .addCase(fetchBookByCategory.pending, (state, action) => {
        state.booksByCategory.isLoading = true;
        state.booksByCategory.error = null;
      })
      .addCase(fetchBookByCategory.fulfilled, (state, action) => {
        state.booksByCategory.items = action.payload;
        state.booksByCategory.isLoading = false;
      })
      .addCase(fetchBookByCategory.rejected, (state, action) => {
        state.booksByCategory.isLoading = false;
        state.booksByCategory.error = action.payload;
      }),
});

export const bookShelfReducer = bookShelfSlice.reducer;
