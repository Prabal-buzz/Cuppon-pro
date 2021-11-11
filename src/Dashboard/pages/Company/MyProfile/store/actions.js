const actions = {
    COMPANY_USER_GET: "COMPANY_USER_GET",
    COMPANY_USER_SUCCESS: "COMPANY_USER_SUCCESS",
    COMPANY_USER_FAILURE: "COMPANY_USER_FAILURE",

    COMPANY_PROFILE_SAVE: "COMPANY_PROFILE_SAVE",
    COMPANY_PROFILE_SUCCESS: "COMPANY_PROFILE_SUCCESS",
    COMPANY_PROFILE_FAILURE: "COMPANY_PROFILE_FAILURE",

    COMPANY_PROFILE_PICTURE_SAVE: "COMPANY_PROFILE_PICTURE_SAVE",
    COMPANY_PROFILE_PICTURE_SUCCESS: "COMPANY_PROFILE_PICTURE_SUCCESS",
    COMPANY_PROFILE_PICTURE_FAILURE: "COMPANY_PROFILE_PICTURE_FAILURE",
};

export function getProfile(user_id) {
    return {
        type: "COMPANY_USER_GET",
        user_id
    };
}

export function saveProfile(data, user_id) {
    return {
        type: "COMPANY_PROFILE_SAVE",
        data,
        user_id
    };
}

export function saveProfilePicture(data, user_id) {
    return {
        type: "COMPANY_PROFILE_PICTURE_SAVE",
        data,
        user_id
    };
}

export default actions;
