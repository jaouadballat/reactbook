import React from 'react';
import { Col, Card, CardBody, CardTitle, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';


const BookItem = (book) => {
    return(
            <Col sm="12" className="mt-3">
                <Link to={`/books/getBook?id=${book._id}`}>
                    <Card>
                        <CardBody>
                            <CardTitle>{book.name}</CardTitle>
                            <div className="font-weight-bold">
                                {book.author}
                            </div>
                            <Badge color="danger">price ${book.price}</Badge>
                            <Badge color="danger">pages {book.pages}</Badge>
                            <Badge color="info">rating {book.rating}</Badge>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
    )
}


export default BookItem;