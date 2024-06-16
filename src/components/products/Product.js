
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux';

import { getDiscontPrice, Discount } from '../DiscountPrice'
import { addToCart } from '../../features/useCartSlice'

function CardAction({element, image}) {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1);
    const discount_price = getDiscontPrice(element);
    const id = element.id;
    const title = element.title;
    const price = element.price;
    return (
        <div className="fx card-act">
        <div className="amount fx">
            <button className="amount__remove" onClick = {() => { setAmount(amount > 1 ? amount - 1 : 1) }} >–</button>
            <input type="tel" value={amount} onChange={e => setAmount(e.target.value)}></input>
            <button className="amount__add" onClick = {() => { setAmount(amount + 1) }} >+</button>
        </div>
         <button className="btn" onClick={() => { const quantity=amount; addToCart(dispatch, id, title, image, price, discount_price, quantity)} }>Add to cart</button>
         </div>
    )
}

function ProductVisualize({element, endpoint}) {
    const image = `${endpoint.concat('', element.image)}`
    const discount_price = getDiscontPrice(element);
    return (
        <div className="container fx-wrp">
            <div className="card-img">
                <img src={image} alt="img"></img>
            </div>

            <div className="card-content">

            <h1 className="text-big card__heading">{element.title}</h1>
            <p className="card-price">
                <strong className="h2">{`$${discount_price}`}</strong>
                {discount_price === element.price ? <></> : <s className="text-big">{(`$${element.price}`)}</s>}
                <Discount element={element}/>
            </p>
            <CardAction element={element} image={image}/>
            <h3 className="card__subheding">Description</h3>
            <p className="card__text">{element.description}</p>

            </div>
        </div>
    )
}

export default function ProductPage({endpoint}) {
    const {id} = useParams();
    const [data, setData] = useState(null);

    const url = endpoint.concat('', `/products/${id}`)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data[0]))
    }, [id, url]);

    return (
        <main className="card">
            {data && (<ProductVisualize element={data} endpoint={endpoint}/>)}
        </main>
    )
}
