import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  contacts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {...state, contacts: action.contacts}
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))