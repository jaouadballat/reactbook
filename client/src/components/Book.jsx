import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getBookWithReviewer } from '../actions/books';


class Book extends Component {

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.getBookWithReviewer(id)
    }



    render() {
        return(
            <div>Book with Review</div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBookWithReviewer}, dispatch);
}


export default connect(null, mapDispatchToProps)(Book);