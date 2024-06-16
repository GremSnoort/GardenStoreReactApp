import React, { useEffect, useState } from 'react'
import { addToCart } from '../../features/useCartSlice'
import { useDispatch } from 'react-redux'
import { getDiscontPrice, Price, Discount } from '../DiscountPrice';

function ProductVisualize({element, endpoint, dispatch}) {
    const id = element.id;
    const title = element.title;
    const price = element.price;
    const image = `${endpoint.concat('', element.image)}`
    const discount_price = getDiscontPrice(element);
    const quantity = 1
    return (
        <div className="item">
        <Discount element={element}/>
        <img className="item__img" src={image} alt="card"></img>
        <button href="#" className="btn" onClick={() => addToCart(dispatch, id, title, image, price, discount_price, quantity) }>Add to cart</button>
        <span className="item__heading">{title}</span>
        <Price element={element}/>
        <a href={`/products/${id}`} className="item__link"></a>
        </div>
    );
};

export default function Products({endpoint, target}) {
    const dispatch = useDispatch()
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoint.concat('', target))
            .then(res => res.json())
            .then(data => setData(data))
    });

    useEffect(() => {}, [dispatch])

    return (
        <main>
            <div className="container">
                <h1 className="h2">Products</h1>
                <div className="container-drawable">
                <div className="fx-wrp item-wrap">
                    {data && data.map((element, index) => {
                    return (<>
                        <ProductVisualize element={element} endpoint={endpoint} dispatch={dispatch}/>
                    </>)
                    })}
                </div>
                </div>
            </div>
        </main>
    )
}

export {ProductVisualize}
