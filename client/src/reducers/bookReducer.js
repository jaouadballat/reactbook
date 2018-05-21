export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_BOOKS': 
            return {...state, books: action.payload}
        
        case 'GET_BOOK':
            return {...state, bookReviewer: action.payload}
        
        case 'ADD_BOOK': 
            return {...state, newBook: action.payload}

        case 'USER_BOOKS':
        return {...state, userBooks: action.payload}

        case 'UPDATE_BOOK': 
        return {...state, bookUpdated: action.payload}

        case 'DELETE_BOOK':
        return {...state}

        default:
            return state;
    }
}