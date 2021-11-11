const actions = {
    GET_BILL_LIST: 'GET_BILL_LIST',
    GET_BILL_LIST_SUCCESS: 'GET_BILL_LIST_SUCCESS',
    GET_BILL_LIST_FAILURE: 'GET_BILL_LIST_FAILURE',

    getList: (company_id) => ({
        type: actions.GET_BILL_LIST,
        company_id
    })
};

export default actions;