import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  contacts: [],
  tabular: true
}

const reducer = (state = initialState, action) => {
  let newContacts = [ ...state.contacts ]
  switch (action.type) {
    case "SET_CONTACTS":
      return {...state, contacts: action.contacts}
    case "SET_VIEW":
      return {...state, tabular: action.tabular}
    case "ADD_CONTACT":
      console.log("masuk add")
      newContacts.unshift(action.payload.contact)
      return {...state, contacts: newContacts }
    case "UPDATE_CONTACT":
      newContacts.splice(action.payload.idx, 1)
      newContacts.unshift(action.payload.contact)
      return {...state, contacts: newContacts }
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(thunk))