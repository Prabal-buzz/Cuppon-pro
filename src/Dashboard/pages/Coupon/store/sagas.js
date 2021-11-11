import { put, call, all, takeLatest } from 'redux-saga/effects';
import Api from '../../../../App/services/api';
import actions from './actions';

const api = new Api();

export const getCoupons = takeLatest(actions.GET_COUPONS, function* (action) {
  try {
    const response = yield call(api.get, 'coupon', action.params);
    yield put({ type: actions.GET_COUPONS_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.GET_COUPONS_FAILURE, error });
  }
});

export const createCoupon = takeLatest(actions.CREATE_COUPON, function* (
  action
) {
  try {
    yield call(api.post, 'coupon', action.data);
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { success: false, error });
  }
});

export const updateCoupon = takeLatest(actions.UPDATE_COUPON, function* (
  action
) {
  try {
    yield call(api.put, `coupon/${action.id}`, action.data);
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { success: false, error });
  }
});

export const deleteCoupon = takeLatest(actions.DELETE_COUPON, function* (
  action
) {
  try {
    yield call(api.delete, `coupon/${action.id}`, {});
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { success: false, error });
  }
});

export default function* saga() {
  yield all([getCoupons, createCoupon, updateCoupon, deleteCoupon]);
}
