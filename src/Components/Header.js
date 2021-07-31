import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navMenu">
            <NavLink className="a" to="/" style={{ textDecoration: 'none', color: 'white', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                { textDecoration: 'underline' }
            }>Sign In</NavLink>
            
            <NavLink className="a" to="/Info" style={{ textDecoration: 'none', color: 'white', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                { textDecoration: 'underline' }
            }>Information</NavLink>

            <NavLink className="a" to="/About" style={{ textDecoration: 'none', color: 'white', textShadow: '2px 2px gray' }} activeClassName="nl" exact activeStyle={
                { textDecoration: 'underline' }
            }>About And Contact</NavLink>
            <div class="dot"></div>
        </div>
    )
}

export default Header