import {
    GET_MY_SERVICES_START,
    GET_MY_SERVICES_PROCESSING,
    GET_MY_SERVICES_SUCCESS,
    GET_MY_SERVICES_FAILURE,
    GET_MY_SERVICES_NORESULT,
    GET_MY_SERVICES_INVALIDREQUEST,
    GET_MY_SERVICES_INVALIDDATA,
    GET_MY_SERVICES_NOTFOUND,
    GET_MY_SERVICES_UNAUTHORIZED,
    GET_MY_SERVICES_FORBIDDEN,
    GET_MY_SERVICES_USERSUSPENDED,
    GET_MY_SERVICES_USERNOTVERIFIED,
    GET_MY_SERVICES_NETWORK_ERROR,
    GET_MY_SERVICES_PAGINATION_START,
    GET_MY_SERVICES_PAGINATION_PROCESSING,
    GET_MY_SERVICES_PAGINATION_SUCCESS,
    GET_MY_SERVICES_PAGINATION_NORESULT,
    GET_MY_SERVICES_PAGINATION_NETWORK_ERROR
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
    data: undefined,
    paginationloading: undefined,
    paginationsuccess: undefined,
    paginationnoresult: undefined
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_MY_SERVICES_START:
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
                pagination: undefined,
                data: undefined
            };
        case GET_MY_SERVICES_PROCESSING:
            return {
                ...state,
                data: undefined
            };
        case GET_MY_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                pagination: payload.data.data.pagination,
                data: payload.data.data.rows
            };
        case GET_MY_SERVICES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                data: undefined
            };
        case GET_MY_SERVICES_NORESULT:
            return {
                ...state,
                loading: false,
                noresult: true,
                data: undefined
            };
        case GET_MY_SERVICES_INVALIDREQUEST:
            return {
                ...state,
                loading: false,
                invalidrequest: true,
                data: undefined
            };
        case GET_MY_SERVICES_INVALIDDATA:
            return {
                ...state,
                loading: false,
                invaliddata: true,
                data: undefined
            };
        case GET_MY_SERVICES_NOTFOUND:
            return {
                ...state,
                loading: false,
                notfound: true,
                data: undefined
            };
        case GET_MY_SERVICES_FORBIDDEN:
            return {
                ...state,
                loading: false,
                forbidden: true,
                data: undefined
            };
        case GET_MY_SERVICES_UNAUTHORIZED:
            return {
                ...state,
                loading: false,
                unauthorized: true,
                data: undefined
            };
        case GET_MY_SERVICES_USERSUSPENDED:
            return {
                ...state,
                loading: false,
                usersuspended: true,
                data: undefined
            };
        case GET_MY_SERVICES_USERNOTVERIFIED:
            return {
                ...state,
                loading: false,
                usernotverified: true,
                data: undefined
            };
        case GET_MY_SERVICES_NETWORK_ERROR:
            return {
                ...state,
                loading: false,
                network_error: true,
                data: undefined
            };
        case GET_MY_SERVICES_PAGINATION_START:
            return {
                ...state,
                paginationloading: true,
                paginationsuccess: undefined,
                paginationnoresult: undefined,
                data: state.data
            };
        case GET_MY_SERVICES_PAGINATION_PROCESSING:
            return {
                ...state,
                paginationloading: true,
                paginationsuccess: undefined,
                paginationnoresult: undefined,
                data: state.data
            };
        case GET_MY_SERVICES_PAGINATION_SUCCESS:
            return {
                ...state,
                paginationloading: false,
                paginationsuccess: true,
                paginationnoresult: undefined,
                pagination: payload.data.data.pagination,
                data: state.data.concat(payload.data.data.rows)
            };
        case GET_MY_SERVICES_PAGINATION_NORESULT:
            return {
                ...state,
                paginationloading: false,
                paginationsuccess: undefined,
                paginationnoresult: true
            };
        case GET_MY_SERVICES_PAGINATION_NETWORK_ERROR:
            return {
                ...state,
                loading: false,
                noresult: true,
                data: undefined
            };
        default:
            return state;
    }
};