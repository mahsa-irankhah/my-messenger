import React from 'react';
import "./Navbar.css";

const Navbar = ({logoutHandler}) => {
    return (
        <div className='nav-container'>
            <div className='logo-div'>
                Ava Messenger
            </div>
            <div className='logout' onClick={logoutHandler}>
                Log out
            </div>
        </div>
    );
};

export default Navbar;