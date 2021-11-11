import { put, takeEvery, call, all } from 'redux-saga/effects';
import Api from '../../../../../App/services/api';
import actions from './actions';

const api = new Api();

export const saveBill = takeEvery(actions.SAVE_BILL, function* (action) {
  try {
    const res = yield call(api.post, `company/${action.company_id}/bill`, action.data);
    yield put({ type: actions.SAVE_BILL_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.SAVE_BILL_FAILURE, error: error });
  }
});

export const updateBill = takeEvery(actions.UPDATE_BILL, function* (action) {
  try {
    const res = yield call(api.put, `company/${action.company_id}/bill/${action.bill_id}`, action.data);
    yield put({ type: actions.UPDATE_BILL_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.UPDATE_BILL_FAILURE, error: error });
  }
});

export default function* saga() {
  yield all([saveBill, updateBill]);
}
