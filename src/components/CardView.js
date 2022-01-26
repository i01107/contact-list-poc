import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Card from "./Card";

const CardView = () => {
  const { contacts, filter } = useSelector((state) => state)
  const [renderedContacts, setRenderedContacts] = useState(contacts)

  useEffect(() => {
    let filteredContacts = [...contacts]
    if (filter.gender.length > 0) {
      filteredContacts = filteredContacts.filter(contact => filter.gender.findIndex(g => g === contact.gender) >= 0)
    }

    if (filter.nationality.length > 0) {
      filteredContacts = filteredContacts.filter(contact => filter.nationality.findIndex(g => g === contact.nat) >= 0)
    }

    setRenderedContacts(filteredContacts)
  }, [filter, contacts]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="row">
      {
        renderedContacts.map((contact, idx) => <Card key={idx} contact={contact} />)
      }
    </div>
  )
}

export default CardView;