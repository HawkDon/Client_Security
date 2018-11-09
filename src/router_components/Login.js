import React, { Component } from 'react';
import { OuterContainer, FormContainer, Form, FormBlock, Span, CenterBlock } from './my_styled_components';
import Authorization from '../rest/Authorization';
import Spinner from '../loader/Spinner';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { toggleLogin } from '../actions/toggleLogin';

class Login extends Component {
    state = {
        user: {
            userName: "",
            password: "",
        },
        //Validation
        messageToggle: false,
        message: "",
        loader: false,
    }

    checkProperties = (user) => {
        for (let key in user) {
            if (user[key] === "") {
                return false;
            }
        }
        return true;
    }

    handleInputChange = (e) => {
        const target = e.target;
        const { user } = this.state;
        user[target.id] = target.value;
        this.setState({ user, })
    }

    handleInputClick = (e) => {
        e.preventDefault();
        const { user } = this.state;
        // For now we don't have a backend call to catch errors, so we do plain validation from frontend.
        if (this.checkProperties(user) === false) {
            // Error if it does not match
            this.setState({
                messageToggle: true,
                message: "Please type into every single field to login"
            })
        } else {
            this.setState({
                loader: true,
                message: ""
            }, async () => {
                await Authorization.login(user);
                this.setState({
                    messageToggle: false,
                    loader: false,
                }, () => {
                    this.props.toggleLogin();
                    this.props.handleRefresh();
                })
            })
        }
    }
    render() {
        const { userName, password } = this.state.user;
        const { messageToggle, message, loader } = this.state;
        return (
            <OuterContainer toggle={this.props.toggle}>
                <FormContainer>
                    <Form>
                        <Span onClick={this.props.toggleLogin}>X</Span>
                        <h2 style={{ textAlign: 'center' }}>Login</h2>
                        {messageToggle ? (<p style={{ textAlign: 'center', fontSize: '20px' }}>{message}</p>) : null}
                        {loader ? (<Spinner />) : null}
                        <FormBlock><label>Username:</label><input type="text" placeholder="Please type in your username" id="userName" value={userName} onChange={this.handleInputChange} /></FormBlock>
                        <FormBlock><label>Password:</label><input type="password" placeholder="Please type in your lastname" id="password" value={password} onChange={this.handleInputChange} /></FormBlock>
                        <CenterBlock><input style={{ height: '40px' }} type="submit" value="Login" onClick={this.handleInputClick} /></CenterBlock>
                    </Form>
                </FormContainer>
            </OuterContainer>
        );
    }
}

const mapStateToProps = state => ({
    toggle: state.login.toggleLogin
})

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleLogin,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login);