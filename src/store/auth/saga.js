import {
    SET_LOGIN,
    SET_LOGIN_SUCCESS,
    SET_LOGIN_FAILURE,
    SET_LOGIN_INIT
} from './actionTypes'
import {
    setLoginSuccess,
    setLoginFailure
} from './actions'
import {
    takeEvery, 
    fork, 
    put, 
    all, 
    call, 
    takeLatest
} from 'redux-saga/effects'
import {
    setLogin
} from '../../services/authService'

function* login({ payload: { user, history } }){
    try{
        const response = yield call (
            setLogin,
            { "username": user.email, "password": user.password }
        )
        console.log("After call",response);
        if(response.status === 200){
            yield put(setLoginSuccess(response.data))
            history.push("/home")
        }
        else{
            yield put(setLoginFailure(response.data.message))
            console.log(response)
        }
    }
    catch(error){
        yield put(setLoginFailure("Something went wrong"))
        console.log(error)
    }
}

export function* watchLogin(){
    yield takeEvery(SET_LOGIN, login)
}

function* AuthSaga(){
    yield all([
        fork(watchLogin)
    ])
}

export default AuthSaga