import { Link } from "react-router-dom"

const Card = ({ contact }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <Link to={`/contacts/${contact.id}`}>
          <img src={contact.picture} className="card-img-top" alt={contact.name} />
        </Link>
        <div className="card-body">
          <Link to={`/contacts/${contact.id}`}>
            <h5 className="card-title">{contact.name}</h5>
          </Link>
          <p className="card-text">
            {contact.email}<br />
            {contact.phone}<br />
            {contact.gender}<br />
            {contact.nat}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card;