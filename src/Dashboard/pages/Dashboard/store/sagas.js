import { put, call, all, takeLatest } from "redux-saga/effects";
import Api from "../../../../App/services/api";
import actions from "./actions";

const api = new Api();

export const getCompanyDetails = takeLatest(actions.GET_COMPANY_DETAILS, function* (action) {
  try {
    const { data } = yield call(api.get, `company/${action.company_id}`);
    yield put({ type: actions.GET_COMPANY_DETAILS_SUCCESS, response: data });
  } catch (error) {
    yield put({ type: actions.GET_COMPANY_DETAILS_FAILURE, error: error });
  }
});


export const getCompanyRoles = takeLatest(actions.GET_COMPANY_ROLES, function* (action) {
  try {
    const { data } = yield call(api.get, `company/${action.company_id}/user`);
    yield put({ type: actions.GET_COMPANY_ROLES_SUCCESS, response: data });
  } catch (error) {
    yield put({ type: actions.GET_COMPANY_ROLES_FAILURE, error: error });
  }
});

export const getTopProducts = takeLatest(actions.GET_TOP_PRODUCTS, function* (action) {
  try {
    const { data } = yield call(api.get, `company/${action.company_id}/product`);
    yield put({ type: actions.GET_TOP_PRODUCTS_SUCCESS, response: data });
  } catch (error) {
    yield put({ type: actions.GET_TOP_PRODUCTS_FAILURE, error: error });
  }
});


export default function* saga() {
  yield all([getCompanyDetails, getCompanyRoles, getTopProducts]);
}
