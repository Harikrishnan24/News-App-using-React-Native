import {
    ADD_SERVICE_IMAGE_START,
    DELETE_SERVICE_IMAGE_START,
    GET_SERVICE_IMAGE_START
} from "./types";

export const addServicesImage = payload => {

    return {
        type: ADD_SERVICE_IMAGE_START,
        payload: payload
    }
}
export const deleteServicesImage = payload => {

    return {
        type: DELETE_SERVICE_IMAGE_START,
        payload: payload
    }
}

export const getServicesImage = payload => {

    return {
        type: GET_SERVICE_IMAGE_START,
        payload: payload
    }
}