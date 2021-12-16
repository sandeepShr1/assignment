import React from 'react';
import { useCart } from "react-use-cart";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>;

    return (
        <div className="overflow-hidden">
            <div className='row justify-content-evenly '>
                <div className="col-12 ">
                    <h5> Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={`https://electronic-ecommerce.herokuapp.com/${item.image}`} style={{ height: '6rem' }} alt='img' />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button
                                                className='btn btn-sm btn-info ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >
                                                -
                                            </button>
                                            <button
                                                className='btn btn-sm btn-info ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >
                                                +
                                            </button>
                                            <button 
                                            className='btn btn-sm btn-danger ms-2'
                                            onClick={() => removeItem(item.id)}
                                            >Remove Item</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto my-3">
                    <h2>Total Price: {cartTotal}</h2>
                </div>
                <div className="col-auto me-3 my-3">
                <button className='btn btn-danger ms-2' onClick={()=> emptyCart()}>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
