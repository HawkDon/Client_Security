import React from 'react';
import { HeaderUl, HeaderLi } from './my_styled_components';
import { NavLink } from 'react-router-dom';

import { toggleLogin, toggleRegister } from './actions/toggleLogin';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';



const Header = ({ toggleLogin, toggleRegister, isLoggedIn, logOut }) => {
    //If logged in
    return (isLoggedIn ?
        (
            <HeaderUl>
                <HeaderLi position="a"><NavLink to='/'>Start</NavLink></HeaderLi>
                <HeaderLi position="i"><NavLink to='/mysql'>MySQL</NavLink></HeaderLi>
                <HeaderLi position="j"><NavLink onClick={logOut} to='/'>Log Out</NavLink></HeaderLi>
            </HeaderUl>
        ) : (
            < HeaderUl >
                < HeaderLi position="a" >< NavLink exact to='/' >Start</NavLink ></HeaderLi >
                <HeaderLi position="j"><NavLink onClick={toggleLogin} to='/login'>Login</NavLink></HeaderLi>
                <HeaderLi position="i"><NavLink onClick={toggleRegister} to='/register'>Register</NavLink></HeaderLi>
            </HeaderUl >
        )
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleLogin,
    toggleRegister,
}, dispatch)

export default connect(null, mapDispatchToProps)(Header);