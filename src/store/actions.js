import axios from 'axios';

export const fetchContacts = () => {
  return (dispatch, getState) => {
    const state = getState()

    if (state.contacts.length === 0) {
      axios({
        method: 'get',
        url: 'https://randomuser.me/api/?results=25&inc=name,picture,email,phone,nat,gender'
      })
      .then(fetchedContacts => {
        dispatch({
          type: "SET_CONTACTS",
          contacts: fetchedContacts.data.results
        })
      })
    }
  }
}