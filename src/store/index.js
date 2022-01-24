import { createStore } from 'redux';

const initialState = {
  contacts: [1]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return {...state, contacts: action.contacts}
    default:
      return state
  }
}

export default createStore(reducer)