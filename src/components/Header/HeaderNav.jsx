import React from 'react';
import css from './Header.module.css';

import { ReactComponent as MainLogo } from '../../icon/maim-logo.svg';

import { ReactComponent as Burger } from '../../icon/align-left.svg';
import { ReactComponent as Switcher } from '../../icon/switcher.svg';
import { ReactComponent as UserIcon } from '../../icon/user.svg';
import { ReactComponent as Dropdown } from '../../icon/fi-ss-caret-down.svg';
import { ReactComponent as Cart } from '../../icon/cart.svg';
import { NavLink } from 'react-router-dom';
import * as Routes from 'helpers/constants';

const HeaderNav = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.nav}>
          <NavLink to={Routes.HOME_ROUTE} className={css.headerLogoLink}>
            <MainLogo className={css.headerMainLogo} />
          </NavLink>

          <NavLink to={Routes.HOME_ROUTE} className={css.headerHomeNav}>
            Home
          </NavLink>
          <NavLink
            to={Routes.SHOPPINGLIST_ROUTE}
            className={css.headerShopListNav}
          >
            Shopping list <Cart />
          </NavLink>
        </nav>

        <div className={css.headerUserDrop}>
          <Switcher />
          <Burger className={css.headerBurger} />
          <button className={css.headerUserBtn}>
            <UserIcon />

            <span className={css.headerUserName}>Stefan</span>
            <span>
              <Dropdown />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;
