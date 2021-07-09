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
            const {firstName, lastName, email, phone, birthday, sex, rememberMe} = action.payload;
            const newValues = {
                firstName,
                lastName,
                email,
                phone,
                birthday,
                sex,
                rememberMe
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