import React, { Component } from 'react';
import { OuterContainer, FormContainer, Form, FormBlock, CenterBlock, Span } from './my_styled_components';

class Register extends Component {
    render() {
        return (
            <OuterContainer>
                <FormContainer>
                    <Form>
                        <Span>X</Span>
                        <h1 style={{ textAlign: 'center' }}>Register</h1>
                        <FormBlock><label>First Name:</label><input type="text" placeholder="Please type in your first name" /></FormBlock>
                        <FormBlock><label>Last Name:</label><input type="text" placeholder="Please type in your last name" /></FormBlock>
                        <FormBlock><label>Email:</label><input type="text" placeholder="Please type in your email" /></FormBlock>
                        <FormBlock><label>Username:</label><input type="text" placeholder="Please type in your username" /></FormBlock>
                        <FormBlock><label>Password:</label><input type="text" placeholder="Please type in your password" /></FormBlock>
                        <FormBlock><label>Retype Password:</label><input type="text" placeholder="Please type in your password" /></FormBlock>
                        <CenterBlock><input style={{ height: '40px' }} type="submit" value="Register" /></CenterBlock>
                    </Form>
                </FormContainer>
            </OuterContainer>
        );
    }
}

export default Register;