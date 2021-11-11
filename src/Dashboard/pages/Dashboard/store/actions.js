const actions = {

  GET_COMPANY_DETAILS: "GET_COMPANY_DETAILS",
  GET_COMPANY_DETAILS_SUCCESS: "GET_COMPANY_DETAILS_SUCCESS",
  GET_COMPANY_DETAILS_FAILURE: "GET_COMPANY_DETAILS_FAILURE",

  GET_COMPANY_ROLES: "GET_COMPANY_ROLES",
  GET_COMPANY_ROLES_SUCCESS: "GET_COMPANY_ROLES_SUCCESS",
  GET_COMPANY_ROLES_FAILURE: "GET_COMPANY_ROLES_FAILURE",

  GET_TOP_PRODUCTS: "GET_TOP_PRODUCTS",
  GET_TOP_PRODUCTS_SUCCESS: "GET_TOP_PRODUCTS_SUCCESS",
  GET_TOP_PRODUCTS_FAILURE: "GET_TOP_PRODUCTS_FAILURE",

  getCompanyDetails: (company_id) => ({
    type: actions.GET_COMPANY_DETAILS,
    company_id,
  }),

  getCompanyRoles: (company_id) => ({
    type: actions.GET_COMPANY_ROLES,
    company_id,
  }),

  getTopProducts: (company_id) => ({
    type: actions.GET_TOP_PRODUCTS,
    company_id
  }),

};

export default actions;
