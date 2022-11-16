import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Question1 from '../Questions/Question1';
import Sport from '../Sport/Sport';
import './Sports.css'

const Sports = () => {
    const [sports, setSports] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setSports(data))
    }, [])

    const handleAddToCart = (sport) => {
        const newCart = [...cart, sport];
        setCart(newCart);
    }
    return (
        <div>
            {/* <h4 className='header-part'>Select Your Activity</h4> */}
            <div className="sports-container">
                <div className="exercise-container">
                    {
                        sports.map(sport => <Sport
                            key={sport.id}
                            sport={sport}
                            handleAddToCart={handleAddToCart}
                        ></Sport>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
            <div className="question-container">
                <Question1></Question1>
            </div>
        </div>
    );
};

export default Sports;