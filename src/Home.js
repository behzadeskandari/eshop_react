import React from 'react';
import Banner from './assets/banner-ecommerce.jpeg'
// import { Container } from './styles';
import Product from './Product';
import './Home.css';
import Bag from './assets/Bag.jpeg';

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <img src={Banner} alt="this is a screen" className="home__image" width={'100%'}/>

                <div className="home__row">
                    <Product 
                        id="12321341"
                        title="Some Title for The Products This is the description of the product"
                        price={11.96}
                        rating={1}
                        image={Bag}
                    />
                    <Product 
                    id="12322341"
                    title="Some Title for The Products This is the description of the product"
                    price={15.96}
                    rating={4}
                    image={Bag}
                    />
                </div>
                <div className="home__row">
                    <Product 
                    id="12323342"
                    title="Some Title for The Products This is the description of the product"
                    price={17.96}
                    rating={2}
                    image={Bag}
                    />
                    <Product 
                    id="13333341"
                    title="Some Title for The Products This is the description of the product"
                    price={20.96}
                    rating={3}
                    image={Bag}
                    />
                    <Product 
                    id="31122341"
                    title="Some Title for The Products This is the description of the product"
                    price={20.96}
                    rating={4}
                    image={Bag}
                    />
                </div>
                <div className="home__row">
                    <Product
                    id="41341344"
                    title="Some Title for The Products This is the description of the product"
                    price={29.96}
                    rating={2}
                    image={Bag}
                    /> 
                    <Product 
                    id="12443341"
                    title="Some Title for The Products This is the description of the product"
                    price={21.96}
                    rating={4}
                    image={Bag}
                    />
                    <Product
                    id="44421344"
                    title="Some Title for The Products This is the description of the product"
                    price={44.96}
                    rating={3}
                    image={Bag}
                    />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Home;


