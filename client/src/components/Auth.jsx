import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { userAuth } from '../actions/user';

export default function (Component) {

    class AuthRoute extends Component {

        componentWillMount() {
            this.props.userAuth();
        }
        
        render() {

            return (
            this.props.user ? 
                <Component {...this.props} /> 
                : 
                <Redirect to="/login" />
            )
           
        }

    }

    function mapStateToProps(state) {
        return {
            user: state.users.user
        }
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({userAuth}, dispatch);
    }

    return connect(mapStateToProps, mapDispatchToProps)(AuthRoute)


}





