import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  contacts: [],
  tabular: true
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {...state, contacts: action.contacts}
    case "SET_VIEW":
      return {...state, tabular: action.tabular}
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))