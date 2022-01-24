import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Contacts = () => {
  const params = useParams()
  const contacts = useSelector((state) => state.contacts)
  const contact = contacts.find(c => c.id === params.id)

  return (
    <div className="card">
      <div className="card-body">
        <h3>{contact.name}</h3>
        <hr />
        <div className="d-flex flex-row">
          <div className="p-2" style={{ width: '150px' }}>
            <img src={contact.picture} alt={contact.name} style={{ width: '100px' }} />
          </div>
          <p>
            {contact.email}<br />
            {contact.phone}<br />
            {contact.gender}<br />
            {contact.nat}<br />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contacts;