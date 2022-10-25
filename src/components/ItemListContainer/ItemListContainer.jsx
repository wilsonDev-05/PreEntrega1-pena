import React from 'react'
// importacion de estilos
import './itemLIstContainer.css'

/* crear un componente itemlistContainer.jsx con una prop greeting y mostrar el mensaje dentro del contenedor */

const ItemListContainer = ({greeting}) => {
    
    return (
        <div className='ItemListContainer'>
            <h2>{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;
