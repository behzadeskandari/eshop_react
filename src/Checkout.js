import React from 'react';
import './Header.css';
// import { Container } from './styles';
import Banner_checkout from './assets/Banner_checkout.jpeg';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src={Banner_checkout} alt="" className="checkout__ad" />
            <h2 className="checkout__title">
                Your Shopping Basket
            </h2>
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
  );
}

export default Checkout;