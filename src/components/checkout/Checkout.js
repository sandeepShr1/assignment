import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Checkout.scss';
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().positive().integer().required(),
    location: yup.string().required(),
}).required();

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.cartItems)

    const [order, setOrder] = useState({});
    const [isOpen, setIsOpen] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        localStorage.setItem('orders', JSON.stringify(data));
        let rev = localStorage.getItem('orders')
        setOrder(JSON.parse(rev))
        console.log(order);
        setIsOpen(true)
    };

    const closeModal = () => {
        localStorage.removeItem('orders')
        setIsOpen(false)
    };
    return (
        <div>
            <Fade bottom cascade >
                <div className='form'>
                    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='heading'>Proceed To Checkout</h3>

                        <input placeholder='first name' {...register("firstName")} />
                        <p>{errors.firstName?.message}</p>

                        <input placeholder='last name' {...register("lastName")} />
                        <p>{errors.lastName?.message}</p>

                        <input placeholder='email' {...register("email")} />
                        <p>{errors.email?.message}</p>

                        <input placeholder='phone' {...register("phone")} />
                        <p>{errors.phone ? "Please enter valid phone number" : null}</p>

                        <input placeholder='location' {...register("location")} />
                        <p>{errors.location?.message}</p>

                        <input className='button' type="submit" />
                    </form>

                </div>
            </Fade>

            {order && (
                <Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={() => closeModal()}>
                    <Zoom>
                        <button className="close-modal" onClick={() => closeModal()}>
                            x
                        </button>
                        <div className="order-details">
                            <h3 className="success-message">Your order has been placed.</h3>
                            <h2>Order {order._id}</h2>
                            <ul>
                                <li>
                                    <div>Name:</div>
                                    <div>{order.firstName + " " + order.lastName}</div>
                                </li>
                                <li>
                                    <div>Email:</div>
                                    <div>{order.email}</div>
                                </li>
                                <li>
                                    <div>Address:</div>
                                    <div>{order.location}</div>
                                </li>
                                <div>{cartItems.map((el) => {
                                    return <li key={el.name}>
                                        <li>
                                            <div>Items:</div>
                                            <div>{el.name}</div>
                                        </li>
                                    </li>
                                })}</div>
                                <li>
                                    <div>Total:</div>
                                    <div>
                                         Rs {cartItems.reduce((a, c) => a + Number(c.price.replace('$', '')) * 120 * c.count, 0)}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Zoom>
                </Modal>
            )}
        </div>
    )
}

export default Checkout;
