import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRow from './TableRow';
import { fetchContacts } from '../store/actions';

const TableView = () => {
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
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