import { put, takeEvery, call, all } from "redux-saga/effects";
import Api from "../../../../../App/services/api";
import actions from "./actions";

const api = new Api();

export const getUserProfile = takeEvery(actions.COMPANY_USER_GET, function* (
  action
) {
  try {
    const res = yield call(api.get, `user/${action.user_id}`);
    yield put({ type: actions.COMPANY_USER_SUCCESS, response: res });
  } catch (error) {
    yield put({ type: actions.COMPANY_USER_FAILURE, error: error });
  }
});

export const saveUserProfile = takeEvery(
  actions.COMPANY_PROFILE_SAVE,
  function* (action) {
    try {
      const res = yield call(api.put, `user/${action.user_id}`, action.data);
      yield put({ type: actions.COMPANY_PROFILE_SUCCESS, response: res });
    } catch (error) {
      yield put({ type: actions.COMPANY_PROFILE_FAILURE, error: error });
    }
  }
);

export const saveProfilePicture = takeEvery(
  actions.COMPANY_PROFILE_PICTURE_SAVE,
  function* (action) {
    try {
      const res = yield call(api.put, `user/${action.user_id}/profile-pic`, action.data);
      yield put({ type: actions.COMPANY_PROFILE_PICTURE_SUCCESS, response: res });
    } catch (error) {
      yield put({ type: actions.COMPANY_PROFILE_PICTURE_FAILURE, error: error });
    }
  }
);

export default function* saga() {
  yield all([getUserProfile, saveUserProfile, saveProfilePicture]);
}
