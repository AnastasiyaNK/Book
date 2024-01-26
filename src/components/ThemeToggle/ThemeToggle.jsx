import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import css from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light'); // 'light'| 'dark'

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <button
      className={cn(css.toggler, {
        [css.active]: theme === 'dark',
      })}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Enable ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <span className={css.togglerCircle} />
    </button>
  );
};

export default ThemeToggle;
