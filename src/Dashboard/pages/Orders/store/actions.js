const actions = {
  GET_ORDERS: "GET_ORDERS",
  GET_ORDERS_SUCCESS: "GET_ORDERS_SUCCESS",
  GET_ORDERS_FAILURE: "GET_ORDERS_FAILURE",

  getOrders(company_id) {
    return {
      type: "GET_ORDERS",
      company_id,
    };
  }
};

export default actions;
