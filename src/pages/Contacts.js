import { useParams, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Contacts = () => {
  const params = useParams()
  const contacts = useSelector((state) => state.contacts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const idx = contacts.findIndex(c => c.id === params.id)
  const contact = contacts[idx]

  const deleteConfirmation = () => {
    if (window.confirm('Are you sure ?')) {
      contacts.splice(idx, 1)
      dispatch({
        type: 'SET_CONTACTS',
        contacts
      })
      navigate("/", { replace: true })
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3>{contact.name}</h3>
        <hr />
        <div className="d-flex flex-row">
          <div className="p-2" style={{ width: '170px' }}>
            <img
              src={contact.picture}
              alt={contact.name}
              className="img-thumbnail"
              style={{ width: '150px' }} />
          </div>
          <table className="table w-auto">
            <tbody>
              <tr>
                <td><b>Email</b></td><td>{contact.email}</td>
              </tr>
              <tr>
                <td><b>Phone</b></td><td>{contact.phone}</td>
              </tr>
              <tr>
                <td><b>Gender</b></td><td>{contact.gender}</td>
              </tr>
              <tr>
                <td><b>Nationality</b></td><td>{contact.nat}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <NavLink to={`/contacts/edit/${contact.id}`} className='btn btn-sm btn-warning me-2'>Edit</NavLink>
                  <button
                    className='btn btn-sm btn-danger'
                    onClick={deleteConfirmation}>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contacts;