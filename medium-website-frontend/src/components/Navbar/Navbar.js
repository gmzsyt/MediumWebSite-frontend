import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 


const Navbar = () => {
    let userId = 2;
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to={{pathname: '/users/' + userId }}>User</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
