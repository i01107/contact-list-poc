import axios from 'axios';

const contactsConverter = (raw_contacts) => {
  return raw_contacts.map(contact => {
    let newContact = {...contact}
    let { title, first, last } = newContact.name
    newContact.name = [title, first, last].join(" ")
    newContact.picture = newContact.picture.medium
    return newContact
  })
}

export const fetchContacts = () => {
  return (dispatch, getState) => {
    const state = getState()

    if (state.contacts.length === 0) {
      axios({
        method: 'get',
        url: 'https://randomuser.me/api/?results=25&inc=name,picture,email,phone,nat,gender'
      })
      .then(fetchedContacts => {
        let contacts = contactsConverter(fetchedContacts.data.results)
        dispatch({
          type: "SET_CONTACTS",
          contacts
        })
      })
    }
  }
}