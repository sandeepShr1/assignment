import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Checkout.scss';
import Fade from 'react-reveal/Fade';

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().positive().integer().required(),
    location: yup.string().required(),
}).required();

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
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
        </div>
    )
}

export default Checkout;
