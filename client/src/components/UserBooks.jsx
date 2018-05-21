import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';


import { userBooks } from '../actions/books';

class UserBooks extends Component {

    componentWillMount() {
        this.props.userBooks(this.props.userId)
    }

    renderTable = () => (
        this.props.books ? 
             this.props.books.map(book => (
                 <tr key={book._id}>
                    <td>
                        <Link to={`/edit-book/${book._id}`} >
                          {book.name}
                        </Link>
                    </td>
                    <td>{book.author}</td>
                    <td>{moment(book.createdAt).format("MMM Do YY")}</td>
                </tr>
            ))
        : null
        )


    render() {
        return (
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </Table>
            </Container>
        )
    }
}


function mapStateToProps(state) {
    return {
        userId : state.users.user.id,
        books: state.books.userBooks
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userBooks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBooks);