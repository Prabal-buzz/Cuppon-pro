import { put, takeEvery, call, all } from "redux-saga/effects";
import Api from "../../../../../App/services/api";
import actions from "./actions";

const api = new Api();

export const getCompanyInfo = takeEvery(actions.COMPANY_INFO_GET, function* (
  action
) {
  try {
    const res = yield call(api.get, `company/${action.company_id}`);
    yield put({ type: actions.COMPANY_INFO_GET_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.COMPANY_INFO_GET_FAILURE, error: error });
  }
});

export const saveCompanyInfo = takeEvery(actions.COMPANY_INFO_SAVE, function* (
  action
) {
  try {
    const res = yield call(api.put, `company/${action.company_id}`, action.data);
    yield put({ type: actions.COMPANY_INFO_SAVE_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.COMPANY_INFO_SAVE_FAILURE, error: error });
  }
});

export const getCompanyInput = takeEvery(actions.COMPANY_INPUT_GET, function* (
  action
) {
  try {
    const res = yield call(api.get, `company/${action.company_id}/document`);
    yield put({ type: actions.COMPANY_INPUT_GET_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.COMPANY_INPUT_GET_FAILURE, error: error });
  }
});

export const saveCompanyInput = takeEvery(
  actions.COMPANY_INPUT_SAVE,
  function* (action) {
    try {
      const res = yield call(api.post, `company/${action.company_id}/document`, action.data);
      yield put({ type: actions.COMPANY_INPUT_SUCCESS, response: res });
    } catch (error) {
      yield put({ type: actions.COMPANY_INPUT_FAILURE, error: error });
    }
  }
);

export const updateCompanyInput = takeEvery(
  actions.COMPANY_INPUT_UPDATE,
  function* (action) {
    try {
      const res = yield call(api.put, `company/${action.company_id}/document/${action.document_id}`, action.data);
      yield put({ type: actions.COMPANY_INPUT_UPDATE_SUCCESS, response: res });
    } catch (error) {
      yield put({ type: actions.COMPANY_INPUT_UPDATE_FAILURE, error: error });
    }
  }
);

export const getCompanySocial = takeEvery(
  actions.COMPANY_SOCIAL_GET,
  function* (action) {
    try {
      const res = yield call(api.get, `company/${action.company_id}/link`);
      yield put({ type: actions.COMPANY_SOCIAL_GET_SUCCESS, response: res });
    } catch (error) {
      yield put({ type: actions.COMPANY_SOCIAL_GET_FAILURE, error: error });
    }
  }
);

export const saveCompanySocial = takeEvery(
  actions.COMPANY_SOCIAL_SAVE,
  function* (action) {
    try {
      const res = yield call(api.post, `company/${action.company_id}/link`, action.data);
      yield put({ type: actions.COMPANY_SOCIAL_SUCCESS, response: res });
    } catch (error) {
      yield put({ type: actions.COMPANY_SOCIAL_FAILURE, error: error });
    }
  }
);

export const updateCompanySocial = takeEvery(
  actions.COMPANY_SOCIAL_UPDATE,
  function* (action) {
    try {
      const res = yield call(
        api.put,
        `company/${action.company_id}/link/${action.link_id}`,
        action.data
      );
      yield put({ type: actions.COMPANY_SOCIAL_UPDATE_SUCCESS, response: res });
    } catch (error) {
      yield put({ type: actions.COMPANY_SOCIAL_UPDATE_FAILURE, error: error });
    }
  }
);

export default function* saga() {
  yield all([
    getCompanyInfo,
    saveCompanyInfo,
    getCompanyInput,
    saveCompanyInput,
    updateCompanyInput,
    getCompanySocial,
    saveCompanySocial,
    updateCompanySocial,
  ]);
}
