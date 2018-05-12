import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';

import {getBooks} from '../actions/books';


class Home extends React.Component {

    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <div>Home</div>
        );
    }

}

function mapStateToProps(state) {
    console.log(state);
    return {
        books:state.book
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBooks}, dispatch);
}
        
export default connect(mapStateToProps, mapDispatchToProps)(Home);