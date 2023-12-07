import React, { useEffect } from 'react';

import css from '../BestSellers /TopBooks.module.css';
import {
  selectTopBook,
  selectTopBookError,
  selectTopBookIsLoading,
} from 'redux/bookShelf.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { fetchTopBooks } from 'redux/bookShelfSlice';
import { Link } from 'react-router-dom';

// import css from './TopBooks.module.css';

const TopBooks = () => {
  const topBooks = useSelector(selectTopBook);
  const booksIsLoading = useSelector(selectTopBookIsLoading);
  const booksError = useSelector(selectTopBookError);

  console.log(topBooks);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopBooks());
  }, [dispatch]);

  const title = 'Best Sellers Books';
  const splitedTitle = title.split(' '); // ["Best", "Sellers", "Books"]

  const accentedWord = splitedTitle[splitedTitle.length - 1];
  const shortenTitle = splitedTitle.slice(0, -1).join(' ');

  return (
    <div className={css.topBookContainer}>
      {booksError && <p>{booksError}</p>}
      {booksIsLoading && (
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
      <h1 className={css.topBookMainTitle}>
        {shortenTitle} <span>{accentedWord}</span>
      </h1>
      {topBooks?.map(({ list_name, books }) => {
        return (
          <div key={list_name} className={css.topBookSection}>
            <h2 className={css.topBookTitle}>{list_name}</h2>
            <ul className={css.bookList}>
              {books.map(({ book_image, author, title, _id }) => {
                return (
                  <li key={_id} className={css.bookItem}>
                    <img
                      className={css.bookCover}
                      src={book_image}
                      alt={title}
                    />

                    <h3 className={css.bookName}>{title}</h3>
                    <p className={css.bookAutor}>{author}</p>
                  </li>
                );
              })}
            </ul>

            <Link
              to={`/category/${list_name}`}
              className={css.btnSeeMore}
              type="button"
            >
              SEE MORE
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default TopBooks;
