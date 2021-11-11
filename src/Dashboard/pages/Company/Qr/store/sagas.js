import { put, takeLatest, call, all } from "redux-saga/effects";
import Api from "../../../../../App/services/api";
import actions from "./actions";

const api = new Api();

export const getQRs = takeLatest(actions.LIST_QR, function* (action) {
  try {
    const response = yield call(api.get, `company/${action.company}/asset`, action.params);
    yield put({ type: actions.LIST_QR_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.LIST_QR_FAILURE, error });
  }
});

export const createQR = takeLatest(actions.CREATE_QR, function* (action) {
  try {
    yield call(api.post, `company/${action.company}/asset`, action.data);
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export const updateQR = takeLatest(actions.UPDATE_QR, function* (action) {
  try {
    yield call(api.put, `company/${action.company}/asset/${action.id}`, action.data);
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export const deleteQR = takeLatest(actions.DELETE_QR, function* (action) {
  try {
    yield call(api.delete, `company/${action.company}/asset/${action.id}`);
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export default function* saga() {
  yield all([getQRs, createQR, updateQR, deleteQR]);
}
