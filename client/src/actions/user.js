import Api from '../config/Api';


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