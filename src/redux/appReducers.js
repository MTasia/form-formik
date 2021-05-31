import {CREATE_DOCUMENT} from "./types";

const initState = {
    values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthday: '',
        sex: '',
        rememberMe: ''
    },
    valuesForDocument: {}
}

const appReducers = (state = initState, action) => {
    switch (action.type) {
        case (CREATE_DOCUMENT):
            const newValues = {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                phone: action.payload.phone,
                birthday: action.payload.birthday,
                sex: action.payload.sex,
                rememberMe: action.payload.rememberMe
            }
            return {
                ...state,
                values: newValues,
                valuesForDocument: newValues
            }


        default:
            return state
    }
}

export default appReducers