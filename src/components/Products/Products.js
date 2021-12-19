import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Product from '../Products/Product/Product';
import { fetchProducts } from '../../redux/actions/productActions'
import Filter from '../Filter';
import Cart from '../Cart';

const Products = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        props.setProgress(10)
        dispatch(fetchProducts());
        props.setProgress(100)
    }, []);// eslint-disable-line react-hooks/exhaustive-deps



    return (
        < div className="content">
            <div className='main'>
                <Filter />
                <Product />
            </div>
            <div className='sidebar'>
                <Cart />
            </div>
        </div>
    )
}

export default Products;
