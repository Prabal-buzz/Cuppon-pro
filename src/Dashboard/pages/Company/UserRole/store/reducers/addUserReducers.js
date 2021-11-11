import actions from "../actions";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_NEW_USER_SAVE:
      return {
        ...state,
        loading: true,
      };
    case actions.ADD_NEW_USER_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        response: action.response,
      };
    case actions.ADD_NEW_USER_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
