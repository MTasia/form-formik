import {configureStore} from "@reduxjs/toolkit";
import formReducer from "./reducer/formReducer/formSlicer";
import {loadState, saveState} from './localStorage'

const reducer = {
    formReducer
}

const preloadedState = loadState();

const store = configureStore({
    reducer,
    preloadedState
})

store.subscribe(() => {
    saveState({
        formReducer: store.getState().formReducer
    })
})

export default store