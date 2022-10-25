import React from 'react';
import './gardenCart.css'
const Cartwidget = () => {
    return (
        <div className='GardenCart nav__opciones__item'>
            <span className="material-symbols-outlined icon ">
            garden_cart
            </span>
            <span className='GardenCart__count'>
                0
            </span>
        </div>

    );
}

export default Cartwidget;
