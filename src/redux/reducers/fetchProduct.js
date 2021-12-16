import * as actionTypes from '../actions/actionTypes.js';

const initialState = {
    products: [],
    loading: false,
    error: null
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload

            };
        case actionTypes.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload

            };
        default: return state;
    }
};

export default productReducer;