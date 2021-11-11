import actions from "../actions";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_BILL_USER_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_BILL_USER_DETAIL_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        response: action.response,
      };
    case actions.GET_BILL_USER_DETAIL_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.error,
      };
    case actions.RESET_BILL_USER_DETAIL:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
