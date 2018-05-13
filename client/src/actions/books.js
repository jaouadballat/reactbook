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