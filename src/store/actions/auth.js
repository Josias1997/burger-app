import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (token, user) => {
    return {
        type: actionTypes.AUTH_START,
        idToken: token,
        userId: user
    }
};
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logOut = () => {
    return {
        type: actionTypes.AUTH_LOG_OUT
    }
};

export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime)
    }
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD8ThYZjg6KPTeV0ujfz8e-33-mjzGSh-c';
        if(!isSignUp) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD8ThYZjg6KPTeV0ujfz8e-33-mjzGSh-c';
        }
        axios.post(url,
            authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeOut(response.data.expiresIn));
            }).catch(error => {
                console.log(error);
                dispatch(authFail(error.response.data.error))
            })
    }

};