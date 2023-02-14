import accountReducer from "./accountReducer";
import {combineReducers} from 'redux'

export const reducers = {
    accounts: accountReducer
}

const appReducer = combineReducers(reducers)
export default appReducer