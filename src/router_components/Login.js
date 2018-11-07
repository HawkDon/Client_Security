import React, { Component } from 'react';
import { OuterContainer, FormContainer, Form, FormBlock, Span, CenterBlock } from './my_styled_components';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import { toggleLogin } from '../actions/toggleLogin';

class Login extends Component {
    render() {
        return (
            <OuterContainer>
                <FormContainer>
                    <Form>
                        <Span onClick={this.props.toggleLogin}>X</Span>
                        <h1 style={{ textAlign: 'center' }}>Login</h1>
                        <FormBlock><label>Username:</label><input type="text" placeholder="Please type in your username" /></FormBlock>
                        <FormBlock><label>Password:</label><input type="text" placeholder="Please type in your lastname" /></FormBlock>
                        <CenterBlock><input style={{ height: '40px' }} type="submit" value="Register" /></CenterBlock>
                    </Form>
                </FormContainer>
            </OuterContainer>
        );
    }
}

const mapStateToProps = state => ({
    toggle: state.login.toggle
})

const mapDispatchToProps = dispatch => bindActionCreators({
    toggleLogin,
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Login);