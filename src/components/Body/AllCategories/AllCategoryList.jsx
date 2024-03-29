import React, { useEffect } from 'react';
import css from './AllCategoryList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryList } from 'redux/bookShelfSlice';
import {
  selectCategoryError,
  selectCategoryIsLoading,
  selectCategoryList,
} from 'redux/bookShelf.selectors';
import { ThreeDots } from 'react-loader-spinner';
import { NavLink, useLocation } from 'react-router-dom';
import { HOME_ROUTE } from 'helpers/constants';
import cn from 'classnames';

const AllCategoryList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const allCategories = useSelector(selectCategoryList);
  const categoriesIsLoading = useSelector(selectCategoryIsLoading);
  const categoriesError = useSelector(selectCategoryError);

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);

  const isHomePage = location.pathname === '/';
  return (
    <div className={css.outerWrapper}>
      {categoriesError && <p>{categoriesError}</p>}
      {categoriesIsLoading && (
        <div className={css.loaderWrapper}>
          <ThreeDots
            height="40"
            width="55"
            radius="5"
            color="#4f2ee8"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      <div className={css.allCategoryContainer}>
        <ul className={css.allCategoryItem}>
          <li
            className={cn(css.homeLink, {
              [css.active]: isHomePage,
            })}
          >
            <NavLink
              className={({ isActive }) =>
                cn(css.homeLink, { [css.active]: isActive })
              }
              to={HOME_ROUTE}
            >
              All categories
            </NavLink>
          </li>

          {allCategories.map(({ list_name }, index) => {
            return (
              <li key={index} className={css.allCategoryList}>
                <NavLink
                  className={({ isActive }) =>
                    cn(css.homeLink, { [css.active]: isActive })
                  }
                  to={`/category/${list_name}`}
                >
                  {list_name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllCategoryList;
