import { ActionTypes } from "../constants/actions_type";

const initialState = {
    cartItems: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: payload.cartItems
            }

        case ActionTypes.REMOVE_FROM_CART:
            return { ...state, cartItems: payload.cartItems }

        case ActionTypes.INCREMENT_INTO_CART:
            return { ...state, cartItems: payload.carti }

        case ActionTypes.DECREMENT_FROM_CART:
            return { ...state, cartItems: payload.carti }

        default:
            return state;
    }
}