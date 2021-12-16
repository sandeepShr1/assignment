import React from 'react';
import { useCart } from "react-use-cart";


const Product = (props) => {
    let name =props.name;
    let id = props.id;
    let image= props.image;
    let stock = props.stock;
    let catg = props.category.toString()

    let sec = props.createDate
    let normalDate = new Date(sec).toLocaleDateString('en-GB', { timeZone: 'UTC' });
    let price = Number(props.prc.replace('$', ''));

        

    const { addItem } = useCart();

    return (
        <div className="card p-0 my-4 overflow-hidden h-100 shadow">
            <img src={`https://electronic-ecommerce.herokuapp.com/${props.image}`} className="card-img-top img-fluid" alt="Img" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Price: {price}</p>
                <p className="card-text">In Stock:{props.stock}</p>
                <p className="card-text">Created on: {normalDate}</p>
                <p className="card-text">category : {catg}</p>
                <button onClick={() => addItem({name, id, image, price, stock})}  className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
