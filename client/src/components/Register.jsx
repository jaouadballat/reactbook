import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { userRegister } from '../actions/user';


class Register extends Component {

    state = {
        user: {
            email: '',
            password: '',
            firstname: '',
            lastname: ''
        },
        message: ''
    }

    handleChange = (e) => {
        
        let { user } = this.state;
        user[e.target.name] = e.target.value;
        this.setState({ user });
        

    }

    register = (e) => {
        e.preventDefault();
        this.props.userRegister(this.state.user)
    }



    componentWillReceiveProps(props) {
        if(props.user) {
            if (props.user.success) {
                props.history.push('/login');
            } else {
                if (props.user.err.errmsg) {
                    this.setState({ message: 'Email Already Exist' })
                } else {
                    this.setState({ message: props.user.err.message })
                }
            }
        }
    }

    render() {
        return (

            <Container className="mt-2">
                <Form>
                    <FormGroup>
                        <Label>Firstname: </Label>
                        <Input type="text"
                            name="firstname"
                            placeholder="Firstname..."
                            value={this.state.user.firstname}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Lastename: </Label>
                        <Input type="text"
                            name="lastname"
                            placeholder="Lastname..."
                            value={this.state.user.lastname}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Email: </Label>
                        <Input type="email"
                            name="email"
                            placeholder="Email..."
                            value={this.state.user.email}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password: </Label>
                        <Input type="password"
                            name="password"
                            placeholder="Password..."
                            value={this.state.user.password}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button color="primary" onClick={this.register}>Register</Button>
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
    console.log(state);
    return {
        user: state.users.userRegister
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userRegister }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);