import {
    DELETE_SERVICES_START,
    DELETE_SERVICES_PROCESSING,
    DELETE_SERVICES_SUCCESS,
    DELETE_SERVICES_FAILURE,
    DELETE_SERVICES_NORESULT,
    DELETE_SERVICES_INVALIDREQUEST,
    DELETE_SERVICES_INVALIDDATA,
    DELETE_SERVICES_NOTFOUND,
    DELETE_SERVICES_UNAUTHORIZED,
    DELETE_SERVICES_FORBIDDEN,
    DELETE_SERVICES_USERSUSPENDED,
    DELETE_SERVICES_USERNOTVERIFIED,
    DELETE_SERVICES_NETWORK_ERROR
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
        case DELETE_SERVICES_START:
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
        case DELETE_SERVICES_PROCESSING:
            return {
                ...state,
                data: undefined
            };
        case DELETE_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: payload.data
            };
        case DELETE_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: undefined
            };
        case DELETE_SERVICES_NORESULT:
            return {
                ...state,
                loading: false,
                noresult: true,
                data: undefined
            };
        case DELETE_SERVICES_INVALIDREQUEST:
            return {
                ...state,
                loading: false,
                invalidrequest: true,
                data: undefined
            };
        case DELETE_SERVICES_INVALIDDATA:
            return {
                ...state,
                loading: false,
                invaliddata: true,
                data: undefined
            };
        case DELETE_SERVICES_NOTFOUND:
            return {
                ...state,
                loading: false,
                notfound: true,
                data: undefined
            };
        case DELETE_SERVICES_FORBIDDEN:
            return {
                ...state,
                loading: false,
                forbidden: true,
                data: undefined
            };
        case DELETE_SERVICES_UNAUTHORIZED:
            return {
                ...state,
                loading: false,
                unauthorized: true,
                data: undefined
            };
        case DELETE_SERVICES_USERSUSPENDED:
            return {
                ...state,
                loading: false,
                usersuspended: true,
                data: undefined
            };
        case DELETE_SERVICES_USERNOTVERIFIED:
            return {
                ...state,
                loading: false,
                usernotverified: true,
                data: undefined
            };
        case DELETE_SERVICES_NETWORK_ERROR:
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