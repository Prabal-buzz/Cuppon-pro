import { put, takeEvery, call, all } from "redux-saga/effects";
import Api from "../../../../../App/services/api";
import actions from "./actions";

const api = new Api();

export const addNewUser = takeEvery(actions.ADD_NEW_USER_SAVE, function* (
  action
) {
  try {
    const res = yield call(api.post, `user/createstaff/company/${action.company_id}`, action.data);
    yield put({ type: actions.ADD_NEW_USER_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.ADD_NEW_USER_FAILURE, error: error });
  }
});

export const getAllUser = takeEvery(actions.USER_ALL_GET, function* (
  action
) {
  try {
    const res = yield call(api.get, `company/${action.company_id}/user`);
    yield put({ type: actions.USER_ALL_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.USER_ALL_FAILURE, error: error });
  }
});

export const saveUserRole = takeEvery(actions.USER_ROLE_SAVE, function* (
  action
) {
  try {
    const res = yield call(api.put, `company/${action.company_id}/user/${action.user_id}/group`, action.data);
    yield put({ type: actions.USER_ROLE_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.USER_ROLE_FAILURE, error: error });
  }
});

export const getRoleList = takeEvery(actions.COMPANY_ROLE_LIST_GET, function* (
  action
) {
  try {
    const res = yield call(api.get, "company/group");
    yield put({ type: actions.COMPANY_ROLE_LIST_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.COMPANY_ROLE_LIST_FAILURE, error: error });
  }
});

export default function* saga() {
  yield all([addNewUser, getAllUser, saveUserRole, getRoleList]);
}
