import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestSagaActionTypes } from './createRequestSaga';
import { takeLatest } from '@redux-saga/core/effects';
import * as authAPI from '../api';


const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] = createRequestSagaActionTypes('auth/SIGNIN');   
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestSagaActionTypes('auth/SIGNUP');

function* setToken(action: any) {
    localStorage.setItem('token', action.payload.token);
}

export const signIn = createAction(SIGNIN, ({ email, password }: any) => ({
    email,
    password,
}));
export const signUp = createAction(SIGNUP, ({ email, password }: any) => ({
    email,
    password,
}));




const signInSaga = createRequestSaga(SIGNIN, authAPI.signIn);
export function* authSaga() {
  yield takeLatest(SIGNIN, signInSaga);
  yield takeLatest(SIGNIN_SUCCESS, setToken);
}
const signUpSaga = createRequestSaga(SIGNUP, authAPI.signUp);
export function* signUpRegisterSaga() {
  yield takeLatest(SIGNUP, signUpSaga);
}

const initialState = {
    isLoggedIn: null,
    authError: null,
    authSuccess: false,
    errorCode: '',
};

const auth = handleActions(
    {
      [SIGNIN]: (state : any) => ({
        ...state,
      }),
      [SIGNIN_SUCCESS]: (state: any) => ({
        ...state,
        isLoggedIn : true,
      }),
      [SIGNIN_FAILURE]: (state: any, { payload: error }) => ({
        ...state,
      }),
      [SIGNUP_SUCCESS]: (state: any, { payload: error }) => ({
        ...state,
      }),
      [SIGNUP_FAILURE]: (state: any, { payload: error }) => {
        return {
          ...state,
        };
      },
    }, initialState
);

export default auth;