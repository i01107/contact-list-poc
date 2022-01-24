import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import TableRow from './TableRow';

const TableView = () => {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    if (contacts.length === 0) {
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
  }, [])

  return (
    <table className='table table-striped'>
      <thead className='table-dark'>
        <tr>
          <th>Photo</th>
          <th>Bio</th>
          <th>Gender</th>
          <th>Nationality</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          contacts.map((contact, idx) => <TableRow key={idx} contact={contact} />)
        }
      </tbody>
    </table>
  )
}

export default TableView;