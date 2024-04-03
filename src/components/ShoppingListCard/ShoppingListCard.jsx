import React from 'react';
import css from './ShoppingCard.module.css';
import { ReactComponent as Dump } from 'assets/images/icons/dump.svg';
import imgBook from 'assets/images/icons/notes.png';
import imgAmazone from 'assets/images/icons/amazone.png';
import { useDispatch } from 'react-redux';
import { removeShoppingListItem } from 'redux/shoppingListSlice';


const ShoppingListCard = ({
  title,
  author,
  _id,
  buyLinks,
  description,
  bookImage,
  listName,
}) => {
  const dispatch = useDispatch();
   

  const onRemoveCard = () => {
    dispatch(removeShoppingListItem(_id));
  };
  return (
    <div>
      <div className={css.mainShopcontainer}>
        <button onClick={onRemoveCard} className={css.closeShop}>
          <Dump className={css.dumpSvg} />
        </button>

        <div className={css.secondShopcontainer}>
          <img className={css.bookCover} src={bookImage} alt={title} />
          <div className={css.wrapperShop}>
            <h3 className={css.mainTitleShop}>{title}</h3>
            <h4 className={css.genreShop}>{listName}</h4>
            <p className={css.textShop}>{description}</p>
            <div className={css.autorIconWrapper}>
              <p className={css.autorShop}>{author}</p>
              <div className={css.iconWrapper}>
                <img
                  width={48}
                  height={15}
                  className={css.iconBook}
                  src={imgAmazone}
                  alt=""
                />
                <img
                  width={28}
                  height={27}
                  className={css.iconBook}
                  src={imgBook}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingListCard;
