import React from 'react';
import './Sport.css'

const Sport = (props) => {
    const { name, age, time, picture, description } = props.sport;
    const { handleAddToCart } = props;
    return (
        <div className='sport'>
            <img className='rounded' src={picture} alt="" />
            <div className="sport-info">
                <p className='fw-bold fs-5'>{name}</p>
                <p>Age : {age}</p>
                <p>Time : {time}</p>
                <p>Description : {description}</p>
            </div>
            <button onClick={() => handleAddToCart(props.sport)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Sport;