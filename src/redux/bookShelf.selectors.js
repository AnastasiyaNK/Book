export const selectCategoryList = state => state.bookShelf.categories.items;
export const selectCategoryIsLoading = state =>
  state.bookShelf.categories.isLoading;
export const selectCategoryError = state => state.bookShelf.categories.error;

export const selectTopBook = state => state.bookShelf.books.items;
export const selectTopBookIsLoading = state => state.bookShelf.books.isLoading;
export const selectTopBookError = state => state.bookShelf.books.error;

export const selectByCategory = state => state.bookShelf.booksByCategory.items;
export const selectByCategoryIsLoading = state =>
  state.bookShelf.booksByCategory.isLoading;
export const selectByCategoryError = state =>
  state.bookShelf.booksByCategory.error;

export const selectOpenModal = state => state.modal.isOpen;

export const selectCardId = state => state.modal.selectedCardId;
export const selectBookDetails = state => state.modal.bookDetails;
export const selectShoppingList = state => state.shoppingList.shoppingList;
