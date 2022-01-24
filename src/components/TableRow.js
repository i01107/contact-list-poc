const TableRow = ({ contact }) => {
  return (
    <tr>
      <td>
        <img src={contact.picture} alt={contact.name} />
      </td>
      <td>
        <b>{contact.name}</b><br />
        {contact.email}<br />
        {contact.phone}<br />
      </td>
      <td>{contact.gender}</td>
      <td>{contact.nat}</td>
      <td>
        <button className='btn btn-sm btn-warning me-2'>Edit</button>
        <button className='btn btn-sm btn-danger'>Delete</button>
      </td>
    </tr>
  )
}

export default TableRow;