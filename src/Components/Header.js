import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderList, HeaderElement } from './index'

const Header = (props) => {
    return (
        <HeaderList>
            <HeaderElement>
                <NavLink to="/" style={{ textDecoration: 'none', color: 'yellow' }} activeClassName="nl" exact activeStyle={
                    { textDecoration: 'underline' }
                }>{props.loggedIn ? 'Sign Out' : 'Sign In'}</NavLink>
            </HeaderElement>
            { props.loggedIn &&
                <HeaderElement>
                    <NavLink to="/Analystics" style={{ textDecoration: 'none', color: 'yellow' }} activeClassName="nl" exact activeStyle={
                        { textDecoration: 'underline' }
                    }>Analystics & Statistics</NavLink>
                </HeaderElement >
            }
            { !props.loggedIn &&

                <HeaderElement>
                    <NavLink to="/Info" style={{ textDecoration: 'none', color: 'yellow' }} activeClassName="nl" exact activeStyle={
                        { textDecoration: 'underline' }
                    }>Info</NavLink>
                </HeaderElement >
            }
            <HeaderElement>
                <NavLink to="/About" style={{ textDecoration: 'none', color: 'yellow' }} activeClassName="nl" exact activeStyle={
                    { textDecoration: 'underline' }
                }>About & Contact</NavLink>
            </HeaderElement >
        </HeaderList>
    )
}

export default Header