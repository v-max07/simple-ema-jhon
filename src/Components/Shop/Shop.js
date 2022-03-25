import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        
    }, []);
    const addToCartClickInfo = (product) => {
        //do not do this: cart.push(product)
        const newCart = [...cart, product]; //copy old array items and add new items. 
        setCart(newCart);
    };
    return (
        <div className='shop-items'>
            <div className="products-container">
                {
                    products.map(product => <Product info = {product} key ={product.id} clickHandler={addToCartClickInfo}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;