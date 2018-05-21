import React from 'react';
import { Container, FormGroup, Input, Card, Button, Form } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addBook, getBooks } from '../actions/books';

class AddBook extends React.Component {

    state = {
            name:'',
            author:'',
            review:'',
            pages:'',
            rating:'',
            price:''
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSumbit = (e) => {
        e.preventDefault();
        let owner = this.props.user.id
        this.props.addBook({ ...this.state, owner })
        this.props.getBooks(0, 1);
        this.props.history.push('/')
    }

    render() {
        return (
            <Container className="mt-3">
                <Card>
                    <Container className="my-3">
                       <Form>
                            <FormGroup>
                                <Input type="text" name="name" placeholder="Enter name" onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="author" placeholder="Enter author" onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="textarea" name="review" placeholder="Enter review" onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" min='0' name="pages" placeholder="Pages" onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" min='1' max='5' name="rating" placeholder="Rating" onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="number" min='0' name="price" placeholder="Price" onChange={this.handleInputChange} />
                            </FormGroup>
                            <Button color="primary" block onClick={this.handleSumbit}>ADD BOOK</Button>
                       </Form>
                    </Container>
                </Card>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.users.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addBook, getBooks}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AddBook);