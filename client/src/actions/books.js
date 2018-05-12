import Api from '../config/Api';

export function getBooks(skip=0, limit=3, order='desc') {
    return function(dispatch) {
        Api()
            .get(`/books?skip=${skip}&limit=${limit}&order=${order}`)
            .then(response => {
                dispatch({
                    type: 'GET_BOOKS',
                    payload: response.data.books
                });
            });
    }
}