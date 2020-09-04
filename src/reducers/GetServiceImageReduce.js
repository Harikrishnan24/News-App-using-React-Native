import {
    GET_SERVICE_IMAGE_START,
    GET_SERVICE_IMAGE_PROCESSING,
    GET_SERVICE_IMAGE_SUCCESS,
    GET_SERVICE_IMAGE_FAILURE,
    GET_SERVICE_IMAGE_NORESULT,
    GET_SERVICE_IMAGE_INVALIDREQUEST,
    GET_SERVICE_IMAGE_INVALIDDATA,
    GET_SERVICE_IMAGE_NOTFOUND,
    GET_SERVICE_IMAGE_UNAUTHORIZED,
    GET_SERVICE_IMAGE_FORBIDDEN,
    GET_SERVICE_IMAGE_USERSUSPENDED,
    GET_SERVICE_IMAGE_USERNOTVERIFIED,
    GET_SERVICE_IMAGE_NETWORK_ERROR
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
        case GET_SERVICE_IMAGE_START:
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
        case GET_SERVICE_IMAGE_PROCESSING:
            return {
                ...state,
                data: undefined
            };
        case GET_SERVICE_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: payload.data
            };
        case GET_SERVICE_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_NORESULT:
            return {
                ...state,
                loading: false,
                noresult: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_INVALIDREQUEST:
            return {
                ...state,
                loading: false,
                invalidrequest: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_INVALIDDATA:
            return {
                ...state,
                loading: false,
                invaliddata: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_NOTFOUND:
            return {
                ...state,
                loading: false,
                notfound: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_FORBIDDEN:
            return {
                ...state,
                loading: false,
                forbidden: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_UNAUTHORIZED:
            return {
                ...state,
                loading: false,
                unauthorized: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_USERSUSPENDED:
            return {
                ...state,
                loading: false,
                usersuspended: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_USERNOTVERIFIED:
            return {
                ...state,
                loading: false,
                usernotverified: true,
                data: undefined
            };
        case GET_SERVICE_IMAGE_NETWORK_ERROR:
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