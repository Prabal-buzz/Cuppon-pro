import { put, call, all, takeLatest } from "redux-saga/effects";
import Api from "../../../../App/services/api";
import actions from "./actions";

const api = new Api();

export const getItems = takeLatest(actions.GET_ITEMS, function* (action) {
  try {
    const response = yield call(
      api.get,
      `company/${action.company_id}/product`,
      action.params
    );
    yield put({ type: actions.GET_ITEMS_SUCCESS, response });
  } catch (error) {
    yield put({ type: actions.GET_ITEMS_FAILURE, error });
  }
});

export const createItem = takeLatest(actions.CREATE_ITEM, function* (action) {
  try {
    const response = yield call(
      api.post,
      `company/${action.company_id}/product`,
      action.data
    );
    yield call(action.resolve, response);
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export const getCategories = takeLatest(actions.GET_CATEGORIES, function* (
  action
) {
  try {
    const response = yield call(api.get, "productcategory", action.data);
    yield call(action.resolve, response);
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export const getItemDetail = takeLatest(actions.GET_ITEM_DETAIL, function* (
  action
) {
  try {
    const response = yield call(
      api.get,
      `company/${action.company_id}/product/${action.product_id}`,
      action.data
    );
    yield call(action.resolve, response);
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export const updateItem = takeLatest(actions.UPDATE_ITEM, function* (action) {
  try {
    yield call(
      api.put,
      `company/${action.company_id}/product/${action.product_id}`, action.data
    );
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export const deleteItem = takeLatest(actions.DELETE_ITEM, function* (action) {
  try {
    yield call(
      api.delete,
      `company/${action.company_id}/product/${action.product_id}`, action.data
    );
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export const uploadImage = takeLatest(actions.UPLOAD_ITEM_IMAGE, function* (action) {
  try {
    yield call(
      api.post,
      'product/image/', action.data
    );
    yield call(action.resolve, { success: true });
  } catch (error) {
    yield call(action.reject, { error });
  }
});

export default function* saga() {
  yield all([getItems, createItem, getCategories, getItemDetail, updateItem, deleteItem, uploadImage]);
}
