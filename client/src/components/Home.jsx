import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import { Container, Row, Button } from 'reactstrap';

import {getBooks} from '../actions/books';
import BookItem from './BookItem';

class Home extends React.Component {

    componentWillMount() {
        this.props.getBooks(0,1);
    }
 
    renderBooks() {
        if(this.props.books) {
           return this.props.books.map(book => (
               <BookItem {...book} key={book._id}/>
           ))
        }
    }

    loadMore = () => {
        let books = this.props.books;
        this.props.getBooks(0, 2, 'desc',books);
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.renderBooks()}
                </Row>
                <Button className="mt-3" block onClick={this.loadMore}>Load More</Button>
            </Container>
        );
    }

}

function mapStateToProps(state) {
    return {
        books:state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBooks}, dispatch);
}
        
export default connect(mapStateToProps, mapDispatchToProps)(Home);