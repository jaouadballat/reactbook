import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { userAuth } from '../actions/user';

export default function (ComponentClass) {

    class Guess extends Component {

        componentWillMount() {
            this.props.userAuth();
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.user.isAuth) {
                nextProps.history.push('/')
            }
        }



        render() {

            return (
                this.props.user ? 
                <ComponentClass {...this.props} user={this.props.user} />
                 : <div>Loading</div>
            )

        }

    }

    function mapStateToProps(state) {
        console.log(state);
        return {
            user: state.users.user
        }
    }
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ userAuth }, dispatch);
    }

    return connect(mapStateToProps, mapDispatchToProps)(Guess)


}





