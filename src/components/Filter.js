import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortProducts, filterProducts } from '../redux/actions/productActions'


const Filter = () => {
    const products = useSelector(state => state.data.items);
    const category = useSelector(state => state.data.category);
    const sort = useSelector(state => state.data.sort);
    const filteredItems = useSelector(state => state.data.filteredItems);
    const dispatch = useDispatch();

    return (

        <div className="filter">
            <div className="filter-result">
                {filteredItems.length} Products
            </div>
            <div className='filter-sort' >
                Order{" "}
                <select
                    value={sort}
                    onChange={(e) =>
                        dispatch(sortProducts(
                            filteredItems,
                            e.target.value
                        ))
                    }
                >
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>


            <div className="filter-size">
                Filter{" "}
                <select
                    value={category}
                    onChange={(e) =>
                        dispatch(filterProducts(products, e.target.value))}

                >
                    <option value="">ALL</option>
                    <option value="laptop">laptop</option>
                    <option value="mobile">mobile</option>
                    <option value="watch">watch</option>
                    <option value="keyboard">keyboard</option>
                    <option value="headseat">headset</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
