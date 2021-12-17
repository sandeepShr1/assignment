import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {removeFromCart, incrementInCart, decrementFromCart} from '../redux/actions/cartActions'


const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                {cartItems.length === 0 ? <div> Cart is empty </div> :
                    <div className="cart cart-header">You have {cartItems.length} in the cart {" "}</div>
                }
            </div>
            <div>
                <ul>
                    {cartItems.map(item => {
                        let prc = Number(item.price.replace('$', ''));
                        let NRP = prc * 120
                        return <li key={item.id}>
                            <div>
                                <img src="item.image" alt="" />
                            </div>
                            <div>
                                <div>{item.name}</div>
                                <div><button onClick={() => dispatch(decrementFromCart(item))}>-</button></div>
                                <div>{item.count} x Rs {NRP}</div>
                                <div><button onClick={() => dispatch(incrementInCart(item))}>+</button></div>
                                <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                            </div>
                        </li>
                    })}
                </ul>
                {cartItems.length !== 0 ? <div>
                    <div>
                        Total: Rs {cartItems.reduce((a, c) => a + Number(c.price.replace('$', '')) * 120 * c.count, 0)}
                    </div>
                    <div>
                        <button>Checkout</button>
                    </div>
                </div> : null}

            </div>
        </div>

    )
}

export default Cart
