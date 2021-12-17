import { ActionTypes } from "../constants/actions_type";

export const addToCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(x => {
        if (x.id === product.id) {
            alreadyInCart = true
            x.count++;
        }
    });
    if (!alreadyInCart) {
        cartItems.push({ ...product, count: 1 })
    }
    dispatch({
        type: ActionTypes.ADD_TO_CART,
        payload: { cartItems }
    });
}

export const removeFromCart = (product) => (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice().filter(
        (x) => x.id !== product.id)

    dispatch({
        type: ActionTypes.REMOVE_FROM_CART,
        payload: { cartItems }
    })
}


export const incrementInCart = (product) => (dispatch, getState) => {
    const carti = getState().cart.cartItems.slice();
    carti.forEach(x => {
        if (x.id === product.id) {
            x.count++;
        }
    });
    dispatch({
        type: ActionTypes.INCREMENT_INTO_CART,
        payload: { carti }
    });
}

export const decrementFromCart = (product) => (dispatch, getState) => {
    const carti = getState().cart.cartItems.slice();
    carti.forEach(x => {
        if (x.id === product.id) {
            if (x.count <= 1) {
                const carti = getState().cart.cartItems.slice().filter(
                    (y) => y.id !== product.id)
                return carti

            } else {
                x.count--;
            }
        }
    });
    dispatch({
        type: ActionTypes.DECREMENT_FROM_CART,
        payload: { carti }
    });
}

