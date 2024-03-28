import React from 'react'
import css from './Mobilemenu.module.css'
import cn from 'classnames';
import { ReactComponent as UserIcon } from 'assets/images/icons/user.svg';
import { ReactComponent as Cart } from 'assets/images/icons/cart.svg';
import { NavLink, Routes } from 'react-router-dom';

const Mobilemenu = () => {
  return (
    <div className={css.mobileMenuContainer}>
      <button className={css.headerUserBtn}>
        <UserIcon />
        <span className={css.headerUserName}>Stefan</span>
      </button>

      <div className={css.mobileMenuNav}>
        <NavLink
          to={Routes.HOME_ROUTE}
          className={({ isActive }) =>
            cn(css.headerHomeNav, {
              [css.active]: isActive,
            })
          }
        >
          Home
        </NavLink>
        <NavLink
          to={Routes.SHOPPINGLIST_ROUTE}
          className={({ isActive }) =>
            cn(css.headerShopListNav, {
              [css.active]: isActive,
            })
          }
        >
          Shopping list <Cart />
        </NavLink>
      </div>
      <button className={css.mobileMenuBtn}>Logout</button>
    </div>
  );
}

export default Mobilemenu