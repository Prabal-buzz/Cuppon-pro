import { put, takeEvery, call, all } from 'redux-saga/effects';
import Api from '../../../../../App/services/api';
import actions from './actions';

const api = new Api();

export const getBillUserDetail = takeEvery(actions.GET_BILL_USER_DETAIL, function* (action) {
  try {
    const res = yield call(api.post, 'bill-user-detail', action.data);
    yield put({ type: actions.GET_BILL_USER_DETAIL_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.GET_BILL_USER_DETAIL_FAILURE, error: error });
  }
});

export const createBill = takeEvery(actions.CREATE_BILL, function* (action) {
  try {
    const res = yield call(api.post, `company/${action.company_id}/bill`, action.data);
    yield put({ type: actions.CREATE_BILL_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.CREATE_BILL_FAILURE, error: error });
  }
});

export const verifyBill = takeEvery(actions.VERIFY_BILL, function* (action) {
  try {
    const res = yield call(api.post, `company/${action.company_id}/bill/verify`, action.data);
    yield put({ type: actions.VERIFY_BILL_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.VERIFY_BILL_FAILURE, error: error });
  }
});

export const productListing = takeEvery(actions.PRODUCT_LISTING, function* (action) {
  try {
    const res = yield call(api.get, `company/${action.company_id}/product`);
    yield put({ type: actions.PRODUCT_LISTING_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.PRODUCT_LISTING_FAILURE, error: error });
  }
});

export default function* saga() {
  yield all([getBillUserDetail, productListing, createBill, verifyBill]);
}
