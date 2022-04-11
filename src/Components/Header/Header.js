import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to='home'>Home</NavLink>
            <NavLink to='courses'>Courses</NavLink>
            <NavLink to='class-routine'>Class Routine</NavLink>
            <NavLink to='prizes'>Prizes</NavLink>
            <NavLink to='about-us'>About Us</NavLink>
            <NavLink to='registraiton'>Registration</NavLink>
        </nav>
    );
};

export default Header;