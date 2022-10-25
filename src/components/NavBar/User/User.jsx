import React from 'react';
import './user.css'
import avatar from '../../../img/avatar.png'
const User = () => {
    return (
        <img src={avatar} className="user" alt="usuario-avatar" />
    );
}

export default User;
