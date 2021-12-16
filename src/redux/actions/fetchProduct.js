import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchProductStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCT_START
    };
};

const fetchProductSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCT_SUCCESS,
        payload : products
    };
};

export const fetchProductFailed =(error) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAILED,
        payload: error
    }
};

export const fetchProducts =() => {
    return dispatch => {
        dispatch(fetchProductStart())
        axios.get( 'https://electronic-ecommerce.herokuapp.com/api/v1/product' )
            .then( response => {
                const products = response.data.data.product
                dispatch(fetchProductSuccess(products))
            } )
            .catch( error => {
                dispatch(fetchProductFailed(error.message))
            } );
    };
};