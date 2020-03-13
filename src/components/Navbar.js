import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Our Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/reviews">Customer Reviews</Link></li>
                <li><Link to="/callback">Request Callback</Link></li>
            </ul>
        </nav>
    )
}
