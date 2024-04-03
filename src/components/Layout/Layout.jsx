import React from 'react';
import css from '../App.module.css';
import HeaderNav from 'components/Header/HeaderNav';
import AllCategoryList from 'components/Body/AllCategories/AllCategoryList';
import SupportUkraine from 'components/SupportUkraine/SupportUkraine';
import { useLocation } from 'react-router-dom';
import * as RoutesPaths from 'helpers/constants';
import { useMediaQuery } from 'usehooks-ts';
import cn from 'classnames';

const Layout = ({ children }) => {
  const location = useLocation();
  const isTablet = useMediaQuery('(max-width: 768px)');
  return (
    <div className={css.mainContainer}>
      <HeaderNav />
      <div
        className={cn(css.bodyContainer, {
          [css.shoppingListPage]: location.pathname === RoutesPaths.SHOPPINGLIST_ROUTE,
        })}
      >
        <div className={css.sideBar}>
          {location.pathname === RoutesPaths.SHOPPINGLIST_ROUTE ? null : (
            <AllCategoryList />
          )}
          {location.pathname === RoutesPaths.SHOPPINGLIST_ROUTE &&
            !isTablet && <SupportUkraine />}

          {location.pathname === RoutesPaths.HOME_ROUTE && <SupportUkraine />}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
