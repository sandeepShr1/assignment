import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'
import Fade from 'react-reveal/Fade';

const Product = (props) => {
    const products = useSelector(state => state.data.filteredItems);
    const dispatch = useDispatch()


    return (
        <div>
            <Fade bottom cascade>
                <div className='row justify-content-evenly'>
                    {products.map((product) => {
                        const { id, name, price, stock, image, category, createDate } = product;
                        let catg = category.toString();
                        let normalDate = new Date(createDate).toLocaleDateString('en-GB', { timeZone: 'UTC' });
                        let prc = Number(price.replace('$', ''));
                        let NRP = prc * 120

                        return (
                            <div className="col-md-3" key={id}>
                                <div className='card' >
                                    <img src={`https://electronic-ecommerce.herokuapp.com/${image}`} id='productImg' className="card-img-top img-fluid" alt="Img" />
                                    <div className="card-body">
                                        <h5 className='card-title'>{name}</h5>
                                        <p className='product-price'>Rs. {NRP}</p>
                                        <p >In stock: {stock}</p>
                                        <p >Posted on: {normalDate}</p>
                                        <p >{catg}</p>
                                        <button className='className="button primary"' onClick={() => dispatch(addToCart(product))} disabled={stock <= 0 ? true : false}>Add to cart</button>
                                    </div>
                                </div>
                            </div>


                        )
                    })}
                </div >
            </Fade>
        </div >
    )
}

export default Product
