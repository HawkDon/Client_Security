import React, { Component } from 'react';
import { HeaderUl, HeaderLi } from './my_styled_components';
import { NavLink } from 'react-router-dom';

import { toggleLogin, toggleRegister } from './actions/toggleLogin';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

const Header = ({ toggleLogin, toggleRegister }) => (
    <HeaderUl>
        <HeaderLi position="a"><NavLink exact to='/'>Start</NavLink></HeaderLi>
        <HeaderLi position="j"><NavLink onClick={toggleLogin} to='/login'>Login</NavLink></HeaderLi>
        <HeaderLi position="i"><NavLink onClick={toggleRegister} to='/register'>Register</NavLink></HeaderLi>
        <HeaderLi position="h"><NavLink to='/mysql'>MySQL</NavLink></HeaderLi>
    </HeaderUl>
)

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleLogin,
    toggleRegister,
}, dispatch)

export default connect(null, mapDispatchToProps)(Header);