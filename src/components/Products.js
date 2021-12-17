import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Product from './Product';
import { fetchProducts } from '../redux/actions/productActions'
import Filter from './Filter';
import Cart from './Cart';

const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps



    return (
        < div className="row justify-content-evenly">
            <div className='col-md-8'>
                <Filter />
                <Product />
            </div>
            <div className='col-md-3'>
                <Cart />
            </div>
        </div>
    )
}

export default Products;
