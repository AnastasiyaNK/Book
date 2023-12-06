import axios from 'axios';

export const bookInstance = axios.create({
  baseURL: 'https://books-backend.p.goit.global',
});

export const requeestCategoryList = async () => {
  const { data } = await bookInstance.get('/books/category-list');
  return data;
};

export const requeestTopBooks = async () => {
  const { data } = await bookInstance.get('/books/top-books ');
  return data;
};

export const requeestBookByCategory = async category => {
  const { data } = await bookInstance.get(
    `/books/category?category=${category}`
  );
  return data;
};
export const requeestBookById = async bookId => {
  const { data } = await bookInstance.get(`/books/${bookId}`);
  return data;
};
