import React from 'react';
import card1 from '../../../imeg/card1.jpg';

import css from '../BestSellers /TopBooks.module.css';

// import css from './TopBooks.module.css';

const TopBooks = () => {
  const title = 'Best Sellers Books';
  const splitedTitle = title.split(' '); // ["Best", "Sellers", "Books"]

  const accentedWord = splitedTitle[splitedTitle.length - 1];
  const shortenTitle = splitedTitle.slice(0, -1).join(' ');

  return (
    <div className={css.topBookContainer}>
      <h1 className={css.topBookMainTitle}>
        {shortenTitle} <span>{accentedWord}</span>
      </h1>
      <div className={css.topBookSection}>
        <h2 className={css.topBookTitle}>Combined Print and E-Book Fiction</h2>
        <ul className={css.bookList}>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
        </ul>

        <button className={css.btnSeeMore} type="button">
          SEE MORE
        </button>
      </div>
      <div className={css.topBookSection}>
        <h2 className={css.topBookTitle}>Combined Print and E-Book Fiction</h2>
        <ul className={css.bookList}>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
          <li className={css.bookItem}>
            <img className={css.bookCover} src={card1} alt="Avatar" />

            <h3 className={css.bookName}>I will find you</h3>
            <p className={css.bookAutor}>Harlan Coben</p>
          </li>
        </ul>

        <button className={css.btnSeeMore} type="button">
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default TopBooks;
