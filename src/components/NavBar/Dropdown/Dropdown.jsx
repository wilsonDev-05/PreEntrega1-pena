import './dropdown.css' /* importacion estilos del componente */
import React from 'react'; 

const Dropdown = () => {
    return (
        <>
            <li className="li__item ">
                <a href="#" className="item__link item__link--flex dropdown__btn">Plantas
                    <span className="material-symbols-outlined item__link__icon">
                        expand_more
                    </span>
                </a>
                <ul className='dropdown__vertical'>
                    <li className='li__item--dropdown'><a className=" item__link  item__link--dropdown" href="#">Interior</a></li>
                    <li className='li__item--dropdown'><a className=" item__link  item__link--dropdown" href="#">Exterior</a></li>
                    <li className='li__item--dropdown'><a className=" item__link  item__link--dropdown" href="#">Todos</a></li>
                </ul>
            </li>
        </>
    );
}

// exportacion de componente
export default Dropdown;
