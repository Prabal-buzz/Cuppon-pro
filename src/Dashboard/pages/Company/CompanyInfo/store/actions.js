const actions = {
  COMPANY_INFO_GET: "COMPANY_INFO_GET",
  COMPANY_INFO_GET_SUCCESS: "COMPANY_INFO_GET_SUCCESS",
  COMPANY_INFO_GET_FAILURE: "COMPANY_INFO_GET_FAILURE",

  COMPANY_INFO_SAVE: "COMPANY_INFO_SAVE",
  COMPANY_INFO_SAVE_SUCCESS: "COMPANY_INFO_SAVE_SUCCESS",
  COMPANY_INFO_SAVE_FAILURE: "COMPANY_INFO_SAVE_FAILURE",

  COMPANY_INPUT_GET: "COMPANY_INPUT_GET",
  COMPANY_INPUT_GET_SUCCESS: "COMPANY_INPUT_GET_SUCCESS",
  COMPANY_INPUT_GET_FAILURE: "COMPANY_INPUT_GET_FAILURE",

  COMPANY_INPUT_SAVE: "COMPANY_INPUT_SAVE",
  COMPANY_INPUT_SUCCESS: "COMPANY_INPUT_SUCCESS",
  COMPANY_INPUT_FAILURE: "COMPANY_INPUT_FAILURE",

  COMPANY_INPUT_UPDATE: "COMPANY_INPUT_UPDATE",
  COMPANY_INPUT_UPDATE_SUCCESS: "COMPANY_INPUT_UPDATE_SUCCESS",
  COMPANY_INPUT_UPDATE_FAILURE: "COMPANY_INPUT_UPDATE_FAILURE",

  COMPANY_SOCIAL_GET: "COMPANY_SOCIAL_GET",
  COMPANY_SOCIAL_GET_SUCCESS: "COMPANY_SOCIAL_GET_SUCCESS",
  COMPANY_SOCIAL_GET_FAILURE: "COMPANY_SOCIAL_GET_FAILURE",

  COMPANY_SOCIAL_SAVE: "COMPANY_SOCIAL_SAVE",
  COMPANY_SOCIAL_SUCCESS: "COMPANY_SOCIAL_SUCCESS",
  COMPANY_SOCIAL_FAILURE: "COMPANY_SOCIAL_FAILURE",

  COMPANY_SOCIAL_UPDATE: "COMPANY_SOCIAL_UPDATE",
  COMPANY_SOCIAL_UPDATE_SUCCESS: "COMPANY_SOCIAL_UPDATE_SUCCESS",
  COMPANY_SOCIAL_UPDATE_FAILURE: "COMPANY_SOCIAL_UPDATE_FAILURE",
};

export function getInfo(company_id) {
  return {
    type: "COMPANY_INFO_GET",
    company_id
  };
}

export function saveInfo(data, company_id) {
  return {
    type: "COMPANY_INFO_SAVE",
    data,
    company_id
  };
}

export function getInput(company_id) {
  return {
    type: "COMPANY_INPUT_GET",
    company_id
  };
}

export function saveInput(data, company_id) {
  return {
    type: "COMPANY_INPUT_SAVE",
    data,
    company_id,
  };
}

export function updateInput(data, company_id, document_id) {
  return {
    type: "COMPANY_INPUT_UPDATE",
    data,
    company_id,
    document_id
  };
}

export function getSocial(company_id) {
  return {
    type: "COMPANY_SOCIAL_GET",
    company_id
  };
}

export function saveSocial(data, company_id) {
  return {
    type: "COMPANY_SOCIAL_SAVE",
    data,
    company_id
  };
}

export function updateSocial(data, company_id) {
  return {
    type: "COMPANY_SOCIAL_UPDATE",
    data,
    link_id: data.id,
    company_id
  };
}

export default actions;
