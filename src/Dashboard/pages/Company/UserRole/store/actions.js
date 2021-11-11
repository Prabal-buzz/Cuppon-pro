const actions = {
  ADD_NEW_USER_SAVE: "ADD_NEW_USER_SAVE",
  ADD_NEW_USER_SUCCESS: "ADD_NEW_USER_SUCCESS",
  ADD_NEW_USER_FAILURE: "ADD_NEW_USER_FAILURE",

  USER_ALL_GET: "USER_ALL_GET",
  USER_ALL_SUCCESS: "USER_ALL_SUCCESS",
  USER_ALL_FAILURE: "USER_ALL_FAILURE",

  USER_ROLE_SAVE: "USER_ROLE_SAVE",
  USER_ROLE_SUCCESS: "USER_ROLE_SUCCESS",
  USER_ROLE_FAILURE: "USER_ROLE_FAILURE",

  COMPANY_ROLE_LIST_GET: "COMPANY_ROLE_LIST_GET",
  COMPANY_ROLE_LIST_SUCCESS: "COMPANY_ROLE_LIST_SUCCESS",
  COMPANY_ROLE_LIST_FAILURE: "COMPANY_ROLE_LIST_FAILURE",

};

export function saveNewStaff(data, company_id) {
  return {
    type: "ADD_NEW_USER_SAVE",
    data,
    company_id
  };
}

export function getAllUser(company_id) {
  return {
    type: "USER_ALL_GET",
    company_id
  };
}

export function getRole() {
  return {
    type: "COMPANY_ROLE_LIST_GET",
  };
}

export function saveUserRole(data, company_id) {
  return {
    type: "USER_ROLE_SAVE",
    data,
    user_id: data.user_id,
    company_id
  };
}




export default actions;
