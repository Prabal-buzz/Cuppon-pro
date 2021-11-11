import actions from "./actions";

const initialState = {
  success: false,
  loading: false,
  error: null,
  company: {},
  items: [],
  roles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_COMPANY_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        company: action.response,
      };
    case actions.GET_COMPANY_DETAILS_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.error,
      };

    case actions.GET_COMPANY_ROLES:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_COMPANY_ROLES_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        roles: action.response,
      };
    case actions.GET_COMPANY_ROLES_FAILURE:
      return {
        ...state,
        success: false,
        loading: false,
        error: action.error,
      };

    case actions.GET_TOP_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_TOP_PRODUCTS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        items: action.response,
      };
    case actions.GET_TOP_PRODUCTS_FAILURE:
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
