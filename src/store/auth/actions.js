import {
    SET_LOGIN,
    SET_LOGIN_SUCCESS,
    SET_LOGIN_FAILURE,
    SET_LOGIN_INIT,
    STORE_INIT
} from './actionTypes'

// Actions to set Admin Login
export const setLogin = (user, history) => {
    return{
        type: SET_LOGIN,
        payload: { user, history }
    }
}
export const setLoginSuccess = (data) => {
    return{
        type: SET_LOGIN_SUCCESS,
        payload: data
    }
}
export const setLoginFailure = (data) => {
    return{
        type: SET_LOGIN_FAILURE,
        payload: data
    }
}
export const setLoginInit = (data) => {
    return{
        type: SET_LOGIN_INIT,
        payload: data
    }
}

export const storeInit = (data) => {
    return{
        type: STORE_INIT,
        payload: data
    }
}