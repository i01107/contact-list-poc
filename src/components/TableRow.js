const TableRow = ({ contact }) => {
  const getName = () => {
    let { title, first, last } = contact.name
    return [title, first, last].join(" ")
  }

  return (
    <tr>
      <td>
        <img src={contact.picture.medium} alt={getName()} />
      </td>
      <td>
        <b>{getName()}</b><br />
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