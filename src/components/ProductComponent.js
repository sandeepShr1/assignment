import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
    const products = useSelector(state => state.data.filteredItems);
    const renderList = products.map((product) => {
        const { id, name, price, stock, image, category, createDate } = product;
        let catg = category.toString();
        let normalDate = new Date(createDate).toLocaleDateString('en-GB', { timeZone: 'UTC' });
        let prc = Number(price.replace('$', ''));
        let NRP = prc * 120
        return (
            <div className="card" key={id}>
                <img src={`https://electronic-ecommerce.herokuapp.com/${image}`} className="card-img-top img-fluid" alt="Img" />
                <p>{name}</p>
                <p>{catg}</p>
                <p>Rs. {NRP}</p>
                <p>in stock: {stock}</p>
                <p>{normalDate}</p>
            </div>
        )
    })
    return (
        <div>
            {renderList}
        </div>
    )
}

export default ProductComponent
