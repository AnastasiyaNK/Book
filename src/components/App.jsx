import React from 'react';
import HeaderNav from './Header/HeaderNav';
import css from './App.module.css';
import AllCategoryList from './Body/AllCategories/AllCategoryList';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';

import ShoppingListPages from 'pages/ShoppingListPages';

import * as RoutesPaths from 'helpers/constants';

export const App = () => {
  return (
    <div className={css.mainContainer}>
      <HeaderNav />
      <div className={css.bodyContainer}>
        <AllCategoryList />

        <Routes>
          <Route path={RoutesPaths.HOME_ROUTE} element={<HomePage />} />
          <Route
            path={`${RoutesPaths.CATEGORY_ROUTE}/:categoryId`}
            element={<CategoryPage />}
          />
          <Route
            path={RoutesPaths.SHOPPINGLIST_ROUTE}
            element={<ShoppingListPages />}
          />
        </Routes>
      </div>
    </div>
  );
};
