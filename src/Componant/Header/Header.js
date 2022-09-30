import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/order">Orders</Link>
                <Link to="/product">Products</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/register">Register</Link>
                <Link to="login">Log in</Link>
            </nav>
        </div>
    );
};

export default Header;