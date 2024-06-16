import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import logo from '../../img/logo.svg'

import { getCartCount } from '../../features/useCartSlice'

export default function Header() {
    const dispatch = useDispatch()
    const { totalCount } = useSelector((state) => state.cart)

    useEffect(() => {dispatch(getCartCount())}, [dispatch])

    return (
        <>
        <header className="header">
        <div className="container">
            <a href="./index.html" className="logo"><img
                src={logo}
                alt="logo"
            /></a>
            <nav className="navbar">
            <a className="navbar__link" href="/">Main Page</a>
            <a className="navbar__link" href="/categories">Categories</a>
            <a className="navbar__link" href="/products">All products</a>
            <a className="navbar__link" href="/sales">All sales</a>
            </nav>
            <a className="cart" title="Shopping cart" href="/cart">
            <span className="badge" title="Shopping cart items">{totalCount}</span>
            </a>
        </div>
        </header>
        <main className="container">
            <Outlet />
        </main>
        </>
    )
}
