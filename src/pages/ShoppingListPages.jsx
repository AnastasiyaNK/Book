import ShoppingListCard from 'components/ShoppingListCard/ShoppingListCard';
import React from 'react';
import css from '../components/ShoppingListCard/ShoppingCard.module.css';
import { useSelector } from 'react-redux';
import { selectShoppingList } from 'redux/bookShelf.selectors';
import { ReactComponent as ImgShopping } from 'assets/images/icons/imgshopping.svg';

const ShoppingListPages = () => {
  const shoppingList = useSelector(selectShoppingList);
  console.log(shoppingList);
  return (
    <div className={css.shoppListContainer}>
      <h1 className={css.shoppListMainTitle}>
        Shopping <span className={css.accentedWord}>List</span>
      </h1>
      {!shoppingList.length && (
        <div className={css.someBook}>
          <p className={css.textSomeBook}>
            This page is empty, add some books and proceed to order.
          </p>
          <ImgShopping />
        </div>
      )}
      {shoppingList.map(
        ({
          title,
          author,
          _id,
          buy_links,
          description,
          book_image,
          list_name,
        }) => {
          return (
            <ShoppingListCard
              key={_id}
              _id={_id}
              author={author}
              title={title}
              buyLinks={buy_links}
              description={description}
              bookImage={book_image}
              listName={list_name}
            />
          );
        }
      )}
    </div>
  );
};

export default ShoppingListPages;
