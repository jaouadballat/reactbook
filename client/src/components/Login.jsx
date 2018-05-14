import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userLogin } from '../actions/user';


class Login extends Component {

    state = {
        email: '',
        password: '',
        message: ''
    }

    emailHandler = (event) => {
        this.setState({email: event.target.value})
    }

    passwordHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    login = (event) => {
        event.preventDefault();
        this.props.userLogin(this.state);
    }
  

    componentWillReceiveProps(props) {
       if(props.user.isAuth) {
           localStorage.setItem('token', props.user.token)
           props.history.push('/');
       }else {
           this.setState({message: props.user.message})
       }
    }

    render() {
        return(
            <Container className="mt-2">
                <Form>
                    <FormGroup>
                        <Label>Email: </Label>
                        <Input type="email" 
                            name="email" 
                            placeholder="Email..."
                            value={this.state.email} 
                            onChange={this.emailHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password: </Label>
                        <Input type="password" 
                            name="password" 
                            placeholder="Password..."
                            value={this.state.password} 
                            onChange={this.passwordHandler} />
                    </FormGroup>
                    <Button color="primary" onClick={this.login}>Login</Button>
                    {
                        this.state.message ? 
                            <div className="text-danger">{this.state.message}</div>
                             : ''
                    }
                </Form>
            </Container>
        )
    }


}

function mapStateToProps(state) {
    return {
        user: state.users.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);