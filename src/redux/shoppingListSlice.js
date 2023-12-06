const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  shoppingList: [],
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState: INITIAL_STATE,
  reducers: {
    addShoppingListItem: (state, action) => {
      state.shoppingList = [...state.shoppingList, action.payload];
    },
    removeShoppingListItem: (state, action) => {
      state.shoppingList = state.shoppingList.filter(
        item => item._id !== action.payload
      );
    },
  },
});
export const { addShoppingListItem, removeShoppingListItem } =
  shoppingListSlice.actions;
export const shoppingListReducer = shoppingListSlice.reducer;
