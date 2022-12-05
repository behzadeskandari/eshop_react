import React,{useState} from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

import Bag from './assets/Bag.jpeg'
import { Star } from '@material-ui/icons';

function Product({id, title ,price,rating ,image}) {
  
  const [state,dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            image: image,
            price: price,
            rating: rating
        }
    })
  }
  return (
    <div className='product'>
        <div className="product__info">
            <small>{title}</small>
            <strong className="product__price">
                ${price}
            </strong>
            <div className="product__rating">{
                Array(rating).fill().map((_,i) => (
                    <p key={i}><Star color='secondary' /></p>
                ))
            }</div>
        </div>
        <img src={image} alt='' className='' width={'250px'}/>

        <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product;