import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <ul className='flex gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/addCoffee'>AddCoffee</NavLink>
                <NavLink to='/updateCoffee'>UpdateCoffee</NavLink>
            </ul>
        </div>
    );
};

export default Header;