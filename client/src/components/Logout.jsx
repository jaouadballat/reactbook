import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { userLogout } from '../actions/user';

class Logout extends React.Component {

    componentWillMount() {
        this.props.userLogout()
    }


    render() {
        return (
            <div>Logout</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userLogout }, dispatch)
}

export default connect(null, mapDispatchToProps)(Logout);