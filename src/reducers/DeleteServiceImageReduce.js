import {
    DELETE_SERVICE_IMAGE_START,
    DELETE_SERVICE_IMAGE_PROCESSING,
    DELETE_SERVICE_IMAGE_SUCCESS,
    DELETE_SERVICE_IMAGE_FAILURE,
    DELETE_SERVICE_IMAGE_NORESULT,
    DELETE_SERVICE_IMAGE_INVALIDREQUEST,
    DELETE_SERVICE_IMAGE_INVALIDDATA,
    DELETE_SERVICE_IMAGE_NOTFOUND,
    DELETE_SERVICE_IMAGE_UNAUTHORIZED,
    DELETE_SERVICE_IMAGE_FORBIDDEN,
    DELETE_SERVICE_IMAGE_USERSUSPENDED,
    DELETE_SERVICE_IMAGE_USERNOTVERIFIED,
    DELETE_SERVICE_IMAGE_NETWORK_ERROR
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
        case DELETE_SERVICE_IMAGE_START:
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
        case DELETE_SERVICE_IMAGE_PROCESSING:
            return {
                ...state,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: payload.data
            };
        case DELETE_SERVICE_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_NORESULT:
            return {
                ...state,
                loading: false,
                noresult: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_INVALIDREQUEST:
            return {
                ...state,
                loading: false,
                invalidrequest: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_INVALIDDATA:
            return {
                ...state,
                loading: false,
                invaliddata: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_NOTFOUND:
            return {
                ...state,
                loading: false,
                notfound: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_FORBIDDEN:
            return {
                ...state,
                loading: false,
                forbidden: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_UNAUTHORIZED:
            return {
                ...state,
                loading: false,
                unauthorized: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_USERSUSPENDED:
            return {
                ...state,
                loading: false,
                usersuspended: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_USERNOTVERIFIED:
            return {
                ...state,
                loading: false,
                usernotverified: true,
                data: undefined
            };
        case DELETE_SERVICE_IMAGE_NETWORK_ERROR:
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