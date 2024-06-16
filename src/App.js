import { Routes, Route } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Products from './components/products/Products'
import Product from './components/products/Product'
import Categories from './components/categories/Categories'
import Category from './components/categories/Category'
import Cart from './components/cart/Cart'
import Main from './components/main/Main'

function App() {
  const endpoint = 'http://localhost:3333';
  const target_products_all = '/products/all';
  const target_categories_all = '/categories/all';
  return (
    <div className="container py-3">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/products" element={<Products endpoint={endpoint} target={target_products_all}/>} />
        <Route path="/products/:id" element={<Product endpoint={endpoint}/>} />
        <Route path="/categories" element={<Categories endpoint={endpoint} target={target_categories_all}/>} />
        <Route path="categories/:id" element={<Category endpoint={endpoint}/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
