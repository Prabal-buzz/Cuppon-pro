const actions = {
  LIST_QR: "LIST_QR",
  LIST_QR_SUCCESS: "LIST_QR_SUCCESS",
  LIST_QR_FAILURE: "LIST_QR_FAILURE",
  CREATE_QR: "CREATE_QR",
  UPDATE_QR: "UPDATE_QR",
  DELETE_QR: "DELETE_QR",

  getQRs(company, params) {
    return {
      type: actions.LIST_QR,
      company,
      params
    };
  },

  createQR(data, resolve, reject) {
    return {
      type: actions.CREATE_QR,
      data,
      company: data.company,
      resolve,
      reject
    };
  },

  updateQR(id, data, resolve, reject) {
    return {
      type: actions.UPDATE_QR,
      data,
      id,
      company: data.company,
      resolve,
      reject
    };
  },

  deleteQR(id, company, resolve, reject) {
    return {
      type: actions.DELETE_QR,
      id,
      company,
      resolve,
      reject
    };
  },
};

export default actions;
