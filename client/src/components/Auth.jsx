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

        componentWillReceiveProps(nextProps) {
            this.setState({isLoading: false})
            if(!nextProps.user.isAuth) {
                this.props.history.push('/login')
            }
        }

         state = {
            isLoading: true
        }
   
        render() {
            

            return (
                <Component {...this.props} />
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





