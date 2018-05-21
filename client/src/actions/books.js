import Api from '../config/Api';

export function getBooks(skip=0, limit=3, order='desc', books=[]) {
    if(books.length > 0) {
        skip = books.length;
    }
    return function(dispatch) {
        Api()
            .get(`/books?skip=${skip}&limit=${limit}&order=${order}`)
            .then(response => {
                let newBooks = response.data.books
                dispatch({
                    type: 'GET_BOOKS',
                    payload:  [...books, ...newBooks]
                });
            });
    }
}


export function getBookWithReviewer(id) {
    return function(dispatch) {
        Api().get(`/books/getBook?id=${id}`)
        .then(response => {
                dispatch({
                    type: 'GET_BOOK',
                    payload: response.data.book
                });
            });
    }
}

export function addBook(book) {
    return function(dispatch) {
        Api().post('/books', {...book})
            .then(response => {
                dispatch({
                    type: 'ADD_BOOK',
                    payload: response.data
                });
            }).catch(errors => {
                console.log(errors.message);
            })
    }
}

export function userBooks(userId) {
    return function(dispatch) {
        Api().get(`/books/user_books?user=${userId}`)
        .then(response => {
            dispatch({
                type: 'USER_BOOKS',
                payload: response.data
            });
        });
    }
}

export function updateBook(book) {
    return function(dispatch) {
        Api().put('/books/update-book', {...book})
            .then(response => {
                dispatch({
                    type: 'UPDATE_BOOK',
                    payload: response.data
                });
            });
    }
}

export function deleteBook(BookId) {
    return function(dispatch) {
        Api().delete(`/books/delete-book?id=${BookId}`)
            .then(response => {
                dispatch({
                    type: 'DELETE_BOOK'
                });
            });
    }
} 