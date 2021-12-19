import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/cartActions'
import Fade from 'react-reveal/Fade';
import Spinner from '../../../container/Spinner/Spinner';
import Fail from '../../../container/Fail'
import './Product.scss';

const Product = () => {
    const products = useSelector(state => state.data.filteredItems);
    const { loading, error } = useSelector(state => state.data)
    const dispatch = useDispatch()


    return (
        <div>
            {loading ? <Spinner /> : error ? <Fail /> :
                <div className='row justify-content-evenly'>
                    <Fade bottom cascade>
                        <ul className='products'>
                            {products.map((product) => {
                                const { id, name, price, stock, image, category, createDate } = product;
                                let catg = category.toString();
                                let normalDate = new Date(createDate).toLocaleDateString('en-GB', { timeZone: 'UTC' });
                                let prc = Number(price.replace('$', ''));
                                let NRP = prc * 120

                                return (
                                    <li key={id}>
                                        <div className='product' >
                                            <img src={`https://electronic-ecommerce.herokuapp.com/${image}`} id='productImg' className="card-img-top img-fluid" alt="Img" />
                                            <div className="card-body">
                                                <h5 className='card-title'>{name}</h5>
                                                <p className='product-price'>Rs. {NRP}</p>
                                                <p >In stock: {stock}</p>
                                                <p >Posted on: {normalDate}</p>
                                                <p >{catg}</p>
                                                <button className="button-primary" onClick={() => dispatch(addToCart(product))} disabled={stock <= 0 ? true : false}>Add to cart</button>
                                            </div>
                                        </div>
                                    </li>


                                )
                            })}
                        </ul>
                    </Fade>
                </div >
            }
        </div >
    )
}

export default Product
