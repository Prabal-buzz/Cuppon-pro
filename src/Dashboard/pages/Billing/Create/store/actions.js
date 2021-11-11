const actions = {
    GET_BILL_USER_DETAIL: 'GET_BILL_USER_DETAIL',
    RESET_BILL_USER_DETAIL: 'RESET_BILL_USER_DETAIL',
    GET_BILL_USER_DETAIL_SUCCESS: 'GET_BILL_USER_DETAIL_SUCCESS',
    GET_BILL_USER_DETAIL_FAILURE: 'GET_BILL_USER_DETAIL_FAILURE',

    PRODUCT_LISTING: 'PRODUCT_LISTING',
    PRODUCT_LISTING_SUCCESS: 'PRODUCT_LISTING_SUCCESS',
    PRODUCT_LISTING_FAILURE: 'PRODUCT_LISTING_FAILURE',

    CREATE_BILL: 'CREATE_BILL',
    CREATE_BILL_SUCCESS: 'CREATE_BILL_SUCCESS',
    CREATE_BILL_FAILURE: 'CREATE_BILL_FAILURE',

    ADD_SALES_ITEM: 'ADD_SALES_ITEM',
    ADD_SALES_ITEMS: 'ADD_SALES_ITEMS',
    EDIT_SALES_ITEM: 'EDIT_SALES_ITEM',
    DELETE_SALES_ITEM: 'DELETE_SALES_ITEM',
    RESET_SALES_ITEM: 'RESET_SALES_ITEM',

    VERIFY_BILL: 'VERIFY_BILL',
    VERIFY_BILL_SUCCESS: 'VERIFY_BILL_SUCCESS',
    VERIFY_BILL_FAILURE: 'VERIFY_BILL_FAILURE',

};

export function getBillUserDetail(data) {
  return {
    type: actions.GET_BILL_USER_DETAIL,
    data
  };
}

export function resetBillUserDetail() {
  return {
    type: actions.RESET_BILL_USER_DETAIL,
  };
}

export function createBill(data, company_id) {
  return {
    type: actions.CREATE_BILL,
    data,
    company_id
  };
}

export function addSalesItem(data) {
  return {
    type: actions.ADD_SALES_ITEM,
    data
  };
}

export function addSalesItems(data) {
  return {
    type: actions.ADD_SALES_ITEMS,
    data
  };
}

export function editSalesItem(data) {
  return {
    type: actions.EDIT_SALES_ITEM,
    data
  };
}

export function deleteSalesItem(id) {
  return {
    type: actions.DELETE_SALES_ITEM,
    id
  };
}

export function resetSalesItem() {
  return {
    type: actions.RESET_SALES_ITEM,
  };
}

export function verifyBill(data, company_id) {
  return {
    type: actions.VERIFY_BILL,
    data,
    company_id
  };
}

export function productListing(company_id) {
  return {
    type: actions.PRODUCT_LISTING,
    company_id
  };
}

export default actions;