import React from 'react';
import { Container, FormGroup, Input, Card, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getBookWithReviewer, updateBook, deleteBook } from '../actions/books';

class EditBook extends React.Component {

    state = {
        name: '',
        author: '',
        review: '',
        pages: '',
        rating: '',
        price: '',
        owner: ''
    }

    componentWillMount() {
        this.props.getBookWithReviewer(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...nextProps.book})
    }

     

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    handleSumbit = (e) => {
        e.preventDefault();
        this.props.updateBook(this.state);
        //this.props.history.push('/userbooks')

    }

    handleDelete = (e) => {
        e.preventDefault();
        this.props.deleteBook(this.props.book._id)
        //this.props.history.push('/userbooks')

    }

    render() {
        return (
            <Container className="mt-3">
                <Card>
                    <Container className="my-3">
                        <Form>
                            <FormGroup>
                                <Input type="text" name="name" placeholder="Enter name" onChange={this.handleInputChange} value={this.state.name} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="author" placeholder="Enter author" onChange={this.handleInputChange} value={this.state.author} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" name="review" placeholder="Enter review" onChange={this.handleInputChange} value={this.state.review} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" min='0' name="pages" placeholder="Pages" onChange={this.handleInputChange} value={this.state.pages} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" min='1' max='5' name="rating" placeholder="Rating" onChange={this.handleInputChange} value={this.state.rating} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" min='0' name="price" placeholder="Price" onChange={this.handleInputChange} value={this.state.price} />
                            </FormGroup>
                            <Button color="primary" block onClick={this.handleSumbit}>EDIT BOOK</Button>
                            <Button color="danger" block onClick={this.handleDelete}>DELETE BOOK</Button>
                        </Form>
                    </Container>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.books.bookReviewer,
        bookUpdate: state.books.bookUpdate
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getBookWithReviewer, updateBook, deleteBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(EditBook);