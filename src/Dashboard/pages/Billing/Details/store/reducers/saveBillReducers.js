import actions from "../actions";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SAVE_BILL:
      return {
        ...state,
        loading: true,
      };
    case actions.SAVE_RESET:
      return initialState;
    case actions.SAVE_BILL_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        response: action.response,
      };
    case actions.SAVE_BILL_FAILURE:
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
