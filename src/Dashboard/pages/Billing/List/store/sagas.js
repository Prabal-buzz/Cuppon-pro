import { put, takeEvery, call, all } from 'redux-saga/effects';
import Api from '../../../../../App/services/api';
import actions from './actions';

const api = new Api();

export const getList = takeEvery(actions.GET_BILL_LIST, function* (action) {
  try {
    const res = yield call(api.get, `company/${action.company_id}/bill`);
    yield put({ type: actions.GET_BILL_LIST_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.GET_BILL_LIST_FAILURE, error: error });
  }
});

export default function* saga() {
  yield all([getList]);
}
