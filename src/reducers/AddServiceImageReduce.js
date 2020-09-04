import {
    ADD_SERVICE_IMAGE_START,
    ADD_SERVICE_IMAGE_PROCESSING,
    ADD_SERVICE_IMAGE_SUCCESS,
    ADD_SERVICE_IMAGE_FAILURE,
    ADD_SERVICE_IMAGE_NORESULT,
    ADD_SERVICE_IMAGE_INVALIDREQUEST,
    ADD_SERVICE_IMAGE_INVALIDDATA,
    ADD_SERVICE_IMAGE_NOTFOUND,
    ADD_SERVICE_IMAGE_UNAUTHORIZED,
    ADD_SERVICE_IMAGE_FORBIDDEN,
    ADD_SERVICE_IMAGE_USERSUSPENDED,
    ADD_SERVICE_IMAGE_USERNOTVERIFIED,
    ADD_SERVICE_IMAGE_NETWORK_ERROR
} from "../actions/types";
const initialState = {
    loading: true,
    success: false,
    failure: false,
    noresult: false,
    invalidrequest: false,
    invaliddata: false,
    notfound: false,
    unauthorized: false,
    forbidden: false,
    usersuspended: false,
    usernotverified: false,
    network_error: false,
    data: undefined
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_SERVICE_IMAGE_START:
            return {
                ...state,
                loading: true,
                success: false,
                failure: false,
                noresult: false,
                invalidrequest: false,
                invaliddata: false,
                notfound: false,
                unauthorized: false,
                forbidden: false,
                usersuspended: false,
                usernotverified: false,
                network_error: false,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_PROCESSING:
            return {
                ...state,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: payload.data
            };
        case ADD_SERVICE_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_NORESULT:
            return {
                ...state,
                loading: false,
                noresult: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_INVALIDREQUEST:
            return {
                ...state,
                loading: false,
                invalidrequest: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_INVALIDDATA:
            return {
                ...state,
                loading: false,
                invaliddata: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_NOTFOUND:
            return {
                ...state,
                loading: false,
                notfound: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_FORBIDDEN:
            return {
                ...state,
                loading: false,
                forbidden: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_UNAUTHORIZED:
            return {
                ...state,
                loading: false,
                unauthorized: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_USERSUSPENDED:
            return {
                ...state,
                loading: false,
                usersuspended: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_USERNOTVERIFIED:
            return {
                ...state,
                loading: false,
                usernotverified: true,
                data: undefined
            };
        case ADD_SERVICE_IMAGE_NETWORK_ERROR:
            return {
                ...state,
                loading: false,
                network_error: true,
                data: undefined
            };
        default:
            return state;
    }
};