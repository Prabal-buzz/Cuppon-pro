const actions = {
    GET_COUPONS: 'GET_COUPONS',
    GET_COUPONS_SUCCESS: 'GET_COUPONS_SUCCESS',
    GET_COUPONS_FAILURE: 'GET_COUPONS_FAILURE',
    CREATE_COUPON: 'CREATE_COUPON',
    UPDATE_COUPON: 'UPDATE_COUPON',
    DELETE_COUPON: 'DELETE_COUPON',

    getCoupons: (params) => ({
        type: actions.GET_COUPONS,
        params
    }),

    createCoupon: (data, resolve, reject) => ({
        type: actions.CREATE_COUPON,
        data,
        resolve,
        reject
    }),

    updateCoupon: (id, data, resolve, reject) => ({
        type: actions.UPDATE_COUPON,
        id,
        data,
        resolve,
        reject
    }),

    deleteCoupon: (id, resolve, reject) => ({
        type: actions.DELETE_COUPON,
        id,
        resolve,
        reject
    }),

};

export default actions;