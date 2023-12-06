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
            height="55"
            width="55"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}
      <div className={css.allCategoryContainer}>
        <ul className={css.allCategoryItem}>
          <li className={`${css.homeLink} ${isHomePage ? css.active : ''}`}>
            All categories
          </li>
          {allCategories.map(({ list_name }, index) => {
            return (
              <li key={index} className={css.allCategoryList}>
                <NavLink
                  className={({ isActive }) =>
                    `${css['homeLink']} ${isActive ? css.active : ''}`
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
