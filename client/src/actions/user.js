import Api from '../config/Api';
import { push } from 'react-router-redux'


export function userLogin({email, password}) {

    return function(dispatch) {
        Api().post('/users/login', {email, password})
            .then(response => {
                localStorage.setItem('token', response.data.token)
                dispatch({
                    type: 'USER_LOGIN',
                    payload: response.data
                });
            });
    }

}


export function userAuth() {
    return function(dispatch) {
        let token = localStorage.getItem('token');
        Api().get('/users/auth?token='+token)
            .then(response => {
                dispatch({
                    type: 'USER_AUTH',
                    payload: response.data
                })
            })
    }
}
export function userRegister(data) {
    return function(dispatch) {
        Api().post('/users/register', data)
            .then(response => {
                dispatch({
                    type: 'USER_REGISTER',
                    payload: response.data
                });
            });
    }
}

export function userLogout() {
    return function(dispatch) {
        Api().get('/users/logout')
            .then(response => {
                localStorage.removeItem('token')
                dispatch({
                    type: 'USER_LOGOUT'
                });
                dispatch(push('/'))
            });
    }
}