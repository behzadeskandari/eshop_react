import React from 'react';

// import { Container } from './styles';

import Bag from './assets/Bag.jpeg';
import { Star } from '@material-ui/icons';
import './CheckoutProduct.css';
import { useStateValue} from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
    
        <div className='checkoutProduct'>
            
            <img src={image} alt="" className="checkoutProduct__image" />

            <div className="checkoutProduct__info">
                <div className="checkoutProduct__title">
                    <p>
                        {title}
                    </p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating).fill().map((_,i) => (
                            <p key={i}><Star color='secondary' /></p>
                        ))}
                    </div>
                    <button className='Btn_remove' onClick={removeFromBasket}> Remove From Basket</button>
                </div>
            </div>
        </div>
     
  );
}

export default CheckoutProduct;