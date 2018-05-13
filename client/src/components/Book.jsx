import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Col, Card, CardBody, CardTitle, Badge } from 'reactstrap';

import { getBookWithReviewer } from '../actions/books';


class Book extends Component {

    componentWillMount() {
        let id = this.props.match.params.id;
        this.props.getBookWithReviewer(id)
    }

    renderBook() {
        let {book} = this.props;
        if(book) {
            return(
                <Col sm="12" className="mt-3">
                        <Card>
                            <CardBody>
                                <CardTitle>{book.name}</CardTitle>
                                <p>
                                    Author: <span className="font-weight-bold">
                                        {book.author}
                                    </span>
                                </p>
                                <p>
                                    Review By: <span className="font-weight-bold">
                                    {book.owner.firstname} {book.owner.lastname}
                                    </span>
                                </p>
                                <p>{book.review}</p>
                                <Badge color="danger">price ${book.price}</Badge>
                                <Badge color="danger">pages {book.pages}</Badge>
                                <Badge color="info">rating {book.rating}</Badge>
                            </CardBody>
                        </Card>
                </Col>
            );
        }
    }
    
    render() {
        return(
            <Container>
                {this.renderBook()}
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBookWithReviewer}, dispatch);
}

function mapStateToProps(state) {
    return {
        book: state.books.bookReviewer
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Book);