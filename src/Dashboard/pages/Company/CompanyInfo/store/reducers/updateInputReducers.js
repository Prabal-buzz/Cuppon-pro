import actions from "../actions";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.COMPANY_INPUT_UPDATE:
      return {
        ...state,
        loading: true,
      };
    case actions.COMPANY_INPUT_UPDATE_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        response: action.response,
      };
    case actions.COMPANY_INPUT_UPDATE_FAILURE:
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
