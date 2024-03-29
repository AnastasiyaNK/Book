import React, { useEffect } from 'react';

import css from '../BestSellers /TopBooks.module.css';
import {
  selectTopBook,
  selectTopBookError,
  selectTopBookIsLoading,
} from 'redux/bookShelf.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopBooks } from 'redux/bookShelfSlice';
import { Link } from 'react-router-dom';
import { openModal } from 'redux/modalSlice';
import CardBook from 'components/CategoriesByGenre/CardBook';
import PopUpModal from 'components/Modal/PopUpModal';
import { useMediaQuery } from 'usehooks-ts';

const TopBooks = () => {
  const dispatch = useDispatch();
  const topBooks = useSelector(selectTopBook);
  const booksIsLoading = useSelector(selectTopBookIsLoading);
  const booksError = useSelector(selectTopBookError);

  const isTablet = useMediaQuery('(max-width: 768px) and (min-width: 376px)');
  const isMobile = useMediaQuery('(max-width: 375px)');

  const onOpenModal = bookId => {
    dispatch(openModal(bookId));
  };

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
      {booksIsLoading && <div className={css.loaderWrapper}></div>}
      <h1 className={css.topBookMainTitle}>
        {shortenTitle} <span>{accentedWord}</span>
      </h1>
      {topBooks?.map(({ list_name, books }) => {
        return (
          <div key={list_name} className={css.topBookSection}>
            <h2 className={css.topBookTitle}>{list_name}</h2>
            <ul className={css.bookList}>
              {books
                .slice(0, isTablet ? 3 : isMobile ? 1 : books.length)
                .map(({ book_image, author, title, _id }) => {
                  return (
                    <CardBook
                      onClick={onOpenModal}
                      key={_id}
                      bookImage={book_image}
                      author={author}
                      title={title}
                      _id={_id}
                    />
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
      <PopUpModal />
    </div>
  );
};

export default TopBooks;
