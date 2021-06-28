import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    values: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthday: '',
        sex: '',
        rememberMe: false
    }
}

export const formSlicer = createSlice({
    name: 'form',
    initialState: defaultState,
    reducers: {
        createDocument(state, action) { // fill out state
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
                values: newValues
            }
        }
    }
})

const { actions, reducer } = formSlicer;

export const {createDocument} = actions

export default reducer