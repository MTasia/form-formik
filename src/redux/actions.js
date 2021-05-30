import {CLEAR_ALL, CREATE_DOCUMENT} from "./types";

export const createDocument = (values) => {
    return {
        type: CREATE_DOCUMENT,
        payload: values
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}