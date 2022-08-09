import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';

export const createRequestSagaActionTypes = (type:string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return function* (action: any): Generator<any> {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);

      yield put({
        type: SUCCESS,
        payload: response,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
      });
    }
    yield put(finishLoading(type));
  };
}