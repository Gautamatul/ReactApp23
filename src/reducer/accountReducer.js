import {  SET_ACCOUNTS } from "../Actions/AccountActions";
import {  RECENTLY_ADDED } from "../Actions/AccountActions";

const intialState = {
  accounts: [],
  account : {},
  recentlyAdded : [],
  loading: false
}

export default function accountReducer(previousState = intialState, action) {
  switch (action.type) {
    case SET_ACCOUNTS:
      return { ...previousState, accounts: action.payload }
    case RECENTLY_ADDED:
      return {...previousState, recentlyAdded : [...previousState.recentlyAdded, action.payload]}

    default:
      return previousState;
  }
}