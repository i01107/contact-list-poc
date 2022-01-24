import { Link } from "react-router-dom";

const TableRow = ({ contact }) => {
  return (
    <tr>
      <td>
        <Link to={`/contacts/${contact.id}`}>
          <img src={contact.picture} alt={contact.name} />
        </Link>
      </td>
      <td>
        <b><Link to={`/contacts/${contact.id}`}>{contact.name}</Link></b><br />
        {contact.email}<br />
        {contact.phone}<br />
      </td>
      <td>{contact.gender}</td>
      <td>{contact.nat}</td>
    </tr>
  )
}

export default TableRow;