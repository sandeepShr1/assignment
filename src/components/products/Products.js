import React, { useEffect, useState } from 'react';

const Products = (props) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        let url = "https://electronic-ecommerce.herokuapp.com/api/v1/product";
        let data = await fetch(url);
        let parseData = await data.json();
        let results = parseData.data.product;
        setProducts(results);
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <h3 className='text-center my-3'>Products</h3>
            {/* {JSON.stringify(products)} */}
            <div className="row">
                {products.map((el) => {
                    return <div className="col-md-3" key={el.id}>
                        <p>{el.name}</p>
                        <img className='img-fluid' src={`https://electronic-ecommerce.herokuapp.com/${el.image}`} alt="" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products;
