import Api from '../config/Api';


export function userLogin({email, password}) {

    return function(dispatch) {
        Api().post('/users/login', {email, password})
            .then(response => {
                dispatch({
                    type: 'USER_LOGIN',
                    payload: response.data
                });
            });
    }

}


export function userAuth() {
    return function(dispatch) {
        Api().get('/users/auth')
            .then(response => {
                dispatch({
                    type: 'USER_AUTH',
                    payload: response.data
                })
            })
    }
}