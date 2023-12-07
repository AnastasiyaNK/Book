import CardBook from 'components/CategoriesByGenre/CardBook';
import React, { useEffect, useRef } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectByCategory,
  selectByCategoryError,
  selectByCategoryIsLoading,
} from 'redux/bookShelf.selectors';
import { fetchBookByCategory } from 'redux/bookShelfSlice';

import css from 'components/CategoriesByGenre/GenreCategory.module.css';
import PopUpModal from 'components/Modal/PopUpModal';
import { openModal } from 'redux/modalSlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const headingRef = useRef(null);

  const booksByCategory = useSelector(selectByCategory);
  const booksIsLoading = useSelector(selectByCategoryIsLoading);
  const booksError = useSelector(selectByCategoryError);

  const title = categoryId;
  const splitedTitle = title.split(' '); // ["Best", "Sellers", "Books"]

  const accentedWord = splitedTitle[splitedTitle.length - 1];
  const shortenTitle = splitedTitle.slice(0, -1).join(' ');

  useEffect(() => {
    dispatch(fetchBookByCategory(categoryId));
  }, [dispatch, categoryId]);

  useEffect(() => {
    if (!booksByCategory) return;
    headingRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [booksByCategory]);

  const onOpenModal = bookId => {
    dispatch(openModal(bookId));
  };

  return (
    <div className={css.categoryPage}>
      {booksError && <p>{booksError}</p>}
      {booksIsLoading && (
        <div className={css.loaderWrapper}>
          <ThreeDots
            height="55"
            width="55"
            radius="9"
            color="#4F2EE8"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      )}

      <div className={css.cardBookContainer}>
        <h1 ref={headingRef} className={css.mainTitle}>
          {shortenTitle}{' '}
          <span className={css.accentedWord}>{accentedWord}</span>
        </h1>

        <ul className={css.bookCardList}>
          {booksByCategory.map(({ book_image, author, title, _id }) => {
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
      </div>

      <PopUpModal />
    </div>
  );
};

export default CategoryPage;
