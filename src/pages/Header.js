import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='container-fluid'>
                <ul className='navbar-nav'>
                    <li className='navbar-item'>
                        <Link className='nav-link' to='/home'>Home</Link>
                    </li>
                    <li className='navbar-item'>
                        <Link className='nav-link' to='/user'>Profile</Link>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;