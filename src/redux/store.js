import { compose, createStore } from 'redux'
import appReducers from "./appReducers";
import { loadState } from './localStorage'

const persistedState = loadState();
const store = createStore(
    appReducers,
    persistedState,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

export default store