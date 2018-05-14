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
                let token = localStorage.getItem('token')
                Api().get('/users/auth?token='+token)
                    .then(response => {
                        console.log(response.data);
                    })
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
                })
            });
    }
}