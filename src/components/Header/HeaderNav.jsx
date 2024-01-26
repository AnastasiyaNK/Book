import css from './Header.module.css';

import { ReactComponent as MainLogo } from 'assets/images/icons/maim-logo.svg';

import { ReactComponent as Burger } from 'assets/images/icons/align-left.svg';

import { ReactComponent as UserIcon } from 'assets/images/icons/user.svg';
import { ReactComponent as Dropdown } from 'assets/images/icons/fi-ss-caret-down.svg';
import { ReactComponent as Cart } from 'assets/images/icons/cart.svg';
import { NavLink } from 'react-router-dom';
import * as Routes from 'helpers/constants';
import cn from 'classnames';
import ThemeToggle from 'components/ThemeToggle/ThemeToggle';

const HeaderNav = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <nav className={css.nav}>
          <NavLink to={Routes.HOME_ROUTE} className={css.headerLogoLink}>
            <MainLogo className={css.headerMainLogo} />
          </NavLink>

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
        </nav>

        <div className={css.headerUserDrop}>
          <ThemeToggle />

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
