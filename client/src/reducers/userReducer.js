export default function(state={}, action) {
    switch(action.type) {
        case 'USER_LOGIN':
            return {...state, user: action.payload}
        case 'USER_AUTH':
            return { ...state, user: action.payload }
        case 'USER_REGISTER': 
            return {...state, userRegister: action.payload}
        case 'USER_LOGOUT': 
            return {}
        default: 
            return state;
    }
}