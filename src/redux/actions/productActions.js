import storeApi from '../../apis/storeApi';
import { ActionTypes } from '../constants/actions_type';

const fetchProductStart = () => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_START
  };
};

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductStart())
  try {
    const response = await storeApi.get('/api/v1/product');
    let res = response.data.data.product;
    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: res,
    })

  } catch (error) {
    dispatch(fetchProductFailed(error.message))
  }
};

export const fetchProductFailed = (error) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_FAILED,
    payload: error
  }
};

export const setProducts = (filteredItems) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: filteredItems,
  };
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: ActionTypes.FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      category: category,
      items:
        category === ""
          ? products
          : products.filter((x) => x.category.indexOf(category) >= 0),
    },
  });
};

export const sortProducts = (filteredItems, sort) => (dispatch) => {

  const sortedProducts = filteredItems.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a.id - b.id));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
        : parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
    );
  }
  dispatch({
    type: ActionTypes.ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
