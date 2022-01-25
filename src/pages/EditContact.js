import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Form from "../components/Form";

const EditContact = () => {
  const params = useParams()
  const contacts = useSelector((state) => state.contacts)
  const idx = contacts.findIndex(c => c.id === params.id)
  const contact = contacts[idx]

  return (
    <>
      <h2>Edit Contact</h2>
      <hr />
      <Form currentContact={contact} idx={idx} />
    </>
  )
}

export default EditContact;