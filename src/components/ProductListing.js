import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { fetchProducts } from '../redux/actions/productActions'
import Filter from './Filter';

const ProductListing = () => {

    // const products = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    


    return (
        <div>
            <Filter />
            <ProductComponent />
        </div>
    )
}

export default ProductListing;
