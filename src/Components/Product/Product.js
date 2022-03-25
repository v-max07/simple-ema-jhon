import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {info, clickHandler} = props;
    const {name, price, seller, ratings, img} = info
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Price: ${price} </p>
                <small>Manufacture: {seller} </small>
                <small>Rating: {ratings} </small>
            </div>
            <button onClick={() => clickHandler(info)}>
                Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;