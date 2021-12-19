import { ActionTypes } from "../constants/actions_type";

const initialState = {
    filteredItems: [],
    sort: "",
    category: "",
    items: [],
    loading: false,
    error: null
}
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.FETCH_PRODUCT_START:
            return {
                ...state,
                loading: true
            };
        case ActionTypes.SET_PRODUCTS:
            return { ...state, filteredItems: payload, loading:false };

        case ActionTypes.FETCH_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: payload

            };

        case ActionTypes.ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                sort: payload.sort,
                filteredItems: payload.items,
            };

        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, items: payload, filteredItems: payload };

        case ActionTypes.FILTER_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                category: payload.category,
                filteredItems: payload.items,
            };
        default:
            return state;
    }
}