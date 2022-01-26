import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRow from './TableRow';
import { fetchContacts } from '../store/actions';

const TableView = () => {
  const { contacts, filter } = useSelector((state) => state)
  const [renderedContacts, setRenderedContacts] = useState(contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let updated = false
    if (filter.gender.length > 0) {
      setRenderedContacts(contacts.filter(contact => filter.gender.findIndex(g => g === contact.gender) >= 0))
      updated = true
    }
    
    if (!updated) {
      setRenderedContacts(contacts)
    }
  }, [filter])

  return (
    <table className='table table-striped'>
      <thead className='table-dark'>
        <tr>
          <th>Photo</th>
          <th>Bio</th>
          <th>Gender</th>
          <th>Nationality</th>
        </tr>
      </thead>
      <tbody>
        {
          renderedContacts.map((contact, idx) => <TableRow key={idx} contact={contact} />)
        }
      </tbody>
    </table>
  )
}

export default TableView;