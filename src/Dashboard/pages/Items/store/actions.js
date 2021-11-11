const actions = {
  GET_ITEMS: "GET_ITEMS",
  GET_ITEMS_SUCCESS: "GET_ITEMS_SUCCESS",
  GET_ITEMS_FAILURE: "GET_ITEMS_FAILURE",

  CREATE_ITEM: "CREATE_ITEM",

  GET_CATEGORIES: "GET_CATEGORIES",

  GET_ITEM_DETAIL: "GET_ITEM_DETAIL",
  GET_ITEM_DETAIL_SUCCESS: "GET_ITEM_DETAIL_SUCCESS",
  GET_ITEM_DETAIL_FAILURE: "GET_ITEM_DETAIL_FAILURE",

  UPDATE_ITEM: "UPDATE_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  UPLOAD_ITEM_IMAGE: "UPLOAD_ITEM_IMAGE",

  getItems: (params, company_id) => ({
    type: actions.GET_ITEMS,
    params,
    company_id,
  }),

  createItem: (data, company_id, resolve, reject) => ({
    type: actions.CREATE_ITEM,
    data,
    company_id,
    resolve,
    reject
  }),

  getCategories: (resolve, reject) => ({
    type: actions.GET_CATEGORIES,
    resolve,
    reject
  }),

  getItemDetail: (company_id, product_id, resolve, reject) => ({
    type: actions.GET_ITEM_DETAIL,
    company_id,
    product_id,
    resolve,
    reject
  }),

  uploadImage: (data, resolve, reject) => ({
    type: actions.UPLOAD_ITEM_IMAGE,
    data,
    resolve,
    reject
  }),

  updateItem: (data, company_id, product_id, resolve, reject) => ({
    type: actions.UPDATE_ITEM,
    data,
    company_id,
    product_id,
    resolve,
    reject
  }),

  deleteItem: (data, company_id, product_id, resolve, reject) => ({
    type: actions.DELETE_ITEM,
    data,
    company_id,
    product_id,
    resolve,
    reject
  }),
};

export default actions;
