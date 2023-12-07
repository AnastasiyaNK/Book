import React from 'react';
import HeaderNav from './Header/HeaderNav';
import css from './App.module.css';
import AllCategoryList from './Body/AllCategories/AllCategoryList';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';

import ShoppingListPages from 'pages/ShoppingListPages';

import * as RoutesPaths from 'helpers/constants';
import SupportUkraine from './SupportUkraine/SupportUkraine';

export const App = () => {
  const location = useLocation();

  return (
    <div className={css.mainContainer}>
      <HeaderNav />
      <div className={css.bodyContainer}>
        <div className={css.sideBar}>
          {location.pathname === RoutesPaths.SHOPPINGLIST_ROUTE ? null : (
            <AllCategoryList />
          )}
          <SupportUkraine />
        </div>
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
