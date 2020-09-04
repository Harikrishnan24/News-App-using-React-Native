import {
    CREATE_SERVICES_START,
    UPDATE_SERVICES_START,
    ACTIVATE_SERVICES_START,
    DEACTIVATE_SERVICES_START,
    DELETE_SERVICES_START,
    GET_SERVICE_START,
    GET_SERVICES_START,
    GET_MY_SERVICES_START,
    GET_EST_SERVICES_START
} from "./types";

export const createServices = payload => {
    return {
        type: CREATE_SERVICES_START,
        payload: payload
    }
}


export const updateServices = payload => {

    return {
        type: UPDATE_SERVICES_START,
        payload: payload
    }
}


export const activateServices = payload => {

    return {
        type: ACTIVATE_SERVICES_START,
        payload: payload
    }
}


export const deactivateServices = payload => {

    return {
        type: DEACTIVATE_SERVICES_START,
        payload: payload
    }
}

export const deleteServices = payload => {

    return {
        type: DELETE_SERVICES_START,
        payload: payload
    }
}


export const getService = payload => {

    return {
        type: GET_SERVICE_START,
        payload: payload
    }
}


export const getServices = payload => {

    return {
        type: GET_SERVICES_START,
        payload: payload
    }
}


export const getMyServices = payload => {

    return {
        type: GET_MY_SERVICES_START,
        payload: payload
    }
}


export const getEstServices = payload => {

    return {
        type: GET_EST_SERVICES_START,
        payload: payload
    }
}