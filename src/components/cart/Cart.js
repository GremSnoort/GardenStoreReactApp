import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
    getCartProducts,
    getSubTotal,
//    removeCartItem,
    getCartCount,
    increment,
    decrement,
    calculateTax,
    getTotalAmount,
} from '../../features/useCartSlice'

export default function Cart() {
    const dispatch = useDispatch()
    const { cartItems, totalCount, subAmount } = useSelector(
        (state) => state.cart,
    )

    useEffect(() => {
        dispatch(getCartProducts())
        dispatch(getSubTotal())
        dispatch(getCartCount())
        dispatch(calculateTax())
        dispatch(getTotalAmount())
    }, [dispatch])

    let showCart;

    if (cartItems !== undefined && cartItems.length > 0) {

        showCart = (
          <div className="col">
                {cartItems !== undefined &&
                cartItems.length > 0 &&
                cartItems.map((product, index) =>
                    {
                        return (
                            <div className="shopping_cart-item fx">
                            <img src={product.image} alt="img" className="shopping_cart__img"></img>
                            <div className="shopping_cart-title">
                            <a href={`/products/${product.id}`}>
                              <p className="shopping_cart__heading">{product.title}</p>
                            </a>
                            <div className="fx">
                                <div className="amount fx">
                                    <button className="amount__remove" onClick={() => {
                                        const quantity = 1;
                                        const id = product.id;
                                        dispatch(decrement({id, quantity}))
                                        dispatch(getSubTotal())
                                        dispatch(getCartCount())
                                        dispatch(calculateTax())
                                        dispatch(getTotalAmount())
                                    }}>–</button>
                                    <input type="tel" value={product.quantity} onChange={e => {  }}></input>
                                    <button className="amount__add" onClick={() => {
                                      const quantity = 1;
                                      const id = product.id;
                                      dispatch(increment({id, quantity}))
                                      dispatch(getSubTotal())
                                      dispatch(getCartCount())
                                      dispatch(calculateTax())
                                      dispatch(getTotalAmount())
                                    }}>+</button>
                                </div>
                                <p className="shopping_cart-price fx">
                                    <strong className="text-big">{`$${product.discount_price}`}</strong>
                                    <s>{`$${product.price}`}</s>
                                </p>
                            </div>
                            </div>
                            <button className="shopping_cart-dell"></button>
                            </div>
                        )
                    })
                }  
            </div>
        )
    } else {
        showCart = (<></>);
    }

    return (
        <main className="shopping_cart">
        <div className="container">
            <div className="wrapper">
                <h1 className="h2">Shopping cart</h1>
                <a href="/products" className="link">Back to the store</a>
            </div>
            <div className="fx-wrp">
                {showCart}
                <div className="col shopping_cart-order">
                    <h3 className="text-big shopping_cart-order__heading">Order details</h3>
                    <p className="text-big">{`${totalCount} items total`}</p>
                    <p className="text-big fx">Total
                        <strong className="h2">{`$${subAmount}`}</strong>
                    </p>
                    <form>
                        <input type="text" placeholder="Name" required=""></input>
                        <input type="text" placeholder="Phone number" required=""></input>
                        <input type="text" placeholder="Email" required=""></input>
                        <button type="submit" className="btn">Order</button>
                    </form>
                </div>
            </div>
        </div>
        </main>
    )
}
