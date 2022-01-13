import {
    SET_LOGIN,
    SET_LOGIN_SUCCESS,
    SET_LOGIN_FAILURE,
    SET_LOGIN_INIT,
    STORE_INIT
} from './actionTypes'

const initialState = {
    userDetails: null,
    setLoginSuccess: false,
    setLoginFailure: false,
    isPreloader: false,
    errorMessage: ''
}

const Auth = (state = initialState, action) => {
    switch (action.type) {
        case STORE_INIT:
            return{
                ...state,
                userDetails: null,
                setLoginSuccess: false,
                setLoginFailure: false,
                isPreloader: false,
                errorMessage: ''
            }
        case SET_LOGIN:
            return {
                ...state,
                setLoginSuccess: false,
                setLoginFailure: false,
                isPreloader: true
            }
        case SET_LOGIN_SUCCESS:
            return {
                ...state,
                setLoginSuccess: true,
                setLoginFailure: false,
                userDetails: action.payload
            }
        case SET_LOGIN_FAILURE:
            return {
                ...state,
                setLoginSuccess: false,
                setLoginFailure: true
            }
        case SET_LOGIN_INIT:
            return {
                ...state,
                setLoginSuccess: false,
                setLoginFailure: false,
                isPreloader: false
            }
        default:
            return state
    }
}

export default Auth