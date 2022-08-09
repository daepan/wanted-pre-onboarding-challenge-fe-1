import { combineReducers } from "redux";
import {all} from 'redux-saga/effects';
import auth,{ authSaga, signUpRegisterSaga} from "./auth";


const rootReducer = combineReducers({
    auth,
})


export function* rootSaga(){
    yield all([
        authSaga(),
        signUpRegisterSaga(),
    ])
}


export default rootReducer;