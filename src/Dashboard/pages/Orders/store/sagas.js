import { put, takeLatest, call, all } from "redux-saga/effects";
import Api from "../../../../App/services/api";
import actions from "./actions";

const api = new Api();

export const getOrders = takeLatest(actions.GET_ORDERS, function* (
  action
) {
  try {
    const response = yield call(api.get, `company/${action.company_id}/order`);
    yield put({ type: actions.GET_ORDERS_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.GET_ORDERS_FAILURE, error });
  }
});

export default function* saga() {
  yield all([getOrders]);
}
