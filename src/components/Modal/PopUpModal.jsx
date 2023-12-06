import React, { useEffect } from 'react';

import imgBook from 'assets/images/icons/icons8-ibooks.svg';
import imgAmazone from 'assets/images/icons/amazone.png';
import imgBarne from 'assets/images/icons/barnesandnoble-icon.svg';
import imgIndi from 'assets/images/icons/indiebound.svg';
import imgMilion from 'assets/images/icons/mb.svg';

import { ReactComponent as Close } from 'assets/images/icons/x-close.svg';

import css from './PopUpModal.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBookDetails,
  selectCardId,
  selectOpenModal,
} from 'redux/bookShelf.selectors';
import { closeModal, fetchBookById } from 'redux/modalSlice';
import { addShoppingListItem } from 'redux/shoppingListSlice';

const getBuyLinkImg = {
  Amazon: imgAmazone,
  'Apple Books': imgBook,
  'Barnes and Noble': imgBarne,
  'Books-A-Million': imgMilion,
  Bookshop: imgBarne,
  IndieBound: imgIndi,
};

const PopUpModal = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectOpenModal);
  const selectedCardId = useSelector(selectCardId);
  const bookDetails = useSelector(selectBookDetails);

  console.log(bookDetails);

  const onClose = () => {
    dispatch(closeModal());
  };

  const toggleShopingList = () => {
    if (!bookDetails) return;

    dispatch(addShoppingListItem(bookDetails));
  };

  useEffect(() => {
    if (selectedCardId !== null) {
      dispatch(fetchBookById(selectedCardId));
    }
  }, [dispatch, selectedCardId]);

  if (!open) return null;
  return (
    <div className={css.overlay}>
      {bookDetails !== null && (
        <div className={css.mainPopUpcontainer}>
          <Close onClick={onClose} className={css.closeModal} />

          <div className={css.secondPopUpcontainer}>
            <img
              className={css.bookCover}
              width={192}
              height={281}
              src={bookDetails.book_image}
              alt=""
            />
            <div className={css.wrapperPopUp}>
              <h3 className={css.mainTitlePopUp}>{bookDetails.title}</h3>
              <h4 className={css.autorPopUp}>{bookDetails.author}</h4>
              <p className={css.textPopUp}>{bookDetails.description}</p>
              <div className={css.linksWrapper}>
                {bookDetails.buy_links.map(link => {
                  const linkImg = getBuyLinkImg[link.name];
                  return (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        height={15}
                        className={css.iconBook}
                        src={linkImg}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <button className={css.btnPopUp} onClick={toggleShopingList}>
              Add to shopping list
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpModal;
