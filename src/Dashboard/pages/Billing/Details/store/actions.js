const actions = {
    SAVE_BILL: 'SAVE_BILL',
    SAVE_RESET: 'SAVE_RESET',
    SAVE_BILL_SUCCESS: 'SAVE_BILL_SUCCESS',
    SAVE_BILL_FAILURE: 'SAVE_BILL_FAILURE',

    UPDATE_BILL: 'UPDATE_BILL',
    UPDATE_RESET: 'UPDATE_RESET',
    UPDATE_BILL_SUCCESS: 'UPDATE_BILL_SUCCESS',
    UPDATE_BILL_FAILURE: 'UPDATE_BILL_FAILURE',

};

export function saveBill(data) {
  return {
    type: actions.SAVE_BILL,
    data,
    company_id: data.company,
  };
}

export function resetSave() {
  return {
    type: actions.SAVE_RESET,
  };
}

export function updateBill(data) {
  return {
    type: actions.UPDATE_BILL,
    data,
    company_id: data.company,
    bill_id: data.bill_id
  };
}

export function resetUpdate() {
  return {
    type: actions.UPDATE_RESET,
  };
}

export default actions;