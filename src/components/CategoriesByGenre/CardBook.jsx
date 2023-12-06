import React from 'react';
import css from './GenreCategory.module.css';

const CardBook = ({ onClick, bookImage, author, title, _id }) => {
  return (
    <li className={css.bookItem}>
      <button
        onClick={() => onClick(_id)}
        type="button"
        className={css.bookItemWrapper}
      >
        <img className={css.bookCover} src={bookImage} alt={title} />

        <h3 className={css.bookName}>{title}</h3>
        <p className={css.bookAutor}>{author}</p>
      </button>
    </li>
  );
};

export default CardBook;
