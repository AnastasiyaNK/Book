import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import CategoryPage from 'pages/CategoryPage';

import ShoppingListPages from 'pages/ShoppingListPages';

import * as RoutesPaths from 'helpers/constants';
import Layout from './Layout/Layout';
import LoginPage from 'pages/LoginPage';

export const App = () => {
  return (
    <Layout>
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
        <Route path={RoutesPaths.LOGIN_PAGE} element={<LoginPage />} />
      </Routes>
    </Layout>
  );
};
