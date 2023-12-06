import { configureStore } from '@reduxjs/toolkit';
import { bookShelfReducer } from './bookShelfSlice';
import { modalReducer } from './modalSlice';
import { shoppingListReducer } from './shoppingListSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'shoppingList',
  whitelist: ['shoppingList'],

  storage,
};

export const store = configureStore({
  reducer: {
    bookShelf: bookShelfReducer,
    modal: modalReducer,
    shoppingList: persistReducer(persistConfig, shoppingListReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
