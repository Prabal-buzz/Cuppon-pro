import actions from "./actions";

const initialState = {
  success: false,
  loading: false,
  error: null,
  response: {
    data: [],
    next_page: null,
    page_count: 1,
    previous_page: null,
    success: 1
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LIST_QR:
      return {
        ...state,
        loading: true,
      };
    case actions.LIST_QR_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        response: action.response,
      };
    case actions.LIST_QR_FAILURE:
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
