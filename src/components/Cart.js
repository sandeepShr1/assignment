import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart, incrementInCart, decrementFromCart } from '../redux/actions/cartActions'
import Fade from 'react-reveal/Fade';
import './Cart.scss'

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch();
    return (
        <div>
            <div className="">
                {cartItems.length === 0 ? <div> Cart is empty </div> :
                    <div className="cart cart-header">You have {cartItems.length} items in the cart {" "}</div>}
            </div>
            <div>
                <div className="cart">
                    <Fade left cascade>
                        <ul className="cart-items">
                            {cartItems.map(item => {
                                let prc = Number(item.price.replace('$', ''));
                                let NRP = prc * 120;
                                return <li key={item.id}>
                                    <div>
                                        <img src={`https://electronic-ecommerce.herokuapp.com/${item.image}`} id='productImg' alt="" />
                                    </div>
                                    <div>
                                        <div>{item.name}</div>
                                        <div className=''>
                                            <button className='btn-inc-dec' onClick={() => dispatch(decrementFromCart(item))}>-</button>
                                            {item.count} x Rs {NRP}
                                            <button className='btn-inc-dec' onClick={() => dispatch(incrementInCart(item))}>+</button>
                                        </div>
                                        <button className="button-primary" onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                                    </div>
                                </li>;
                            })}
                        </ul>
                    </Fade>
                </div>
                {cartItems.length !== 0 ? <div className='cart'>
                    <div className="total">
                        Total: Rs {cartItems.reduce((a, c) => a + Number(c.price.replace('$', '')) * 120 * c.count, 0)}
                        <Link className="button-primary" to="/checkout" role="button">Checkout</Link>
                    </div>
                </div> : null}

            </div>
        </div>

    )
}

export default Cart;
