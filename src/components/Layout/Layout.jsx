import React from 'react';
import css from '../App.module.css';
import HeaderNav from 'components/Header/HeaderNav';
import AllCategoryList from 'components/Body/AllCategories/AllCategoryList';
import SupportUkraine from 'components/SupportUkraine/SupportUkraine';
import { useLocation } from 'react-router-dom';
import * as RoutesPaths from 'helpers/constants';

const Layout = ({ children }) => {
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
        {children}
      </div>
    </div>
  );
};

export default Layout;
