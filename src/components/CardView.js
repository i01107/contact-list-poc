import Card from "./Card";
import { useSelector } from "react-redux";

const CardView = () => {
  const contacts = useSelector((state) => state.contacts)

  return (
    <div className="row">
      {
        contacts.map((contact, idx) => <Card key={idx} contact={contact} />)
      }
    </div>
  )
}

export default CardView;