import React from 'react'
import './Productcard.css'

const Productcard = ({ title, price, image }) => {
    return (
        <div className='card'>
            <img src={image}alt='key'/>
            <h1>{title}</h1>
            <h2>${price}</h2>
        </div>
    )
}

export default Productcard