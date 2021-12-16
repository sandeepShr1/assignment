import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/fetchProduct';
import Product from './Product';

const Products = (props) => {

    const {products, loading} = useSelector((state) => ({...state.data}));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts())
       
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className='container'>
            <h3 className='text-center my-3'>Products</h3>
            {/* {JSON.stringify(products)} */}
            <div className="row justify-content-evenly mb-4">
                {products.map((product) => {
                    return <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4 " key={product.id}>
                        <Product name ={product.name} id ={product.id} prc={product.price}  image={product.image} stock={product.stock} createDate={product.createDate} category={product.category}  showAlert ={props.showAlert} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products;
