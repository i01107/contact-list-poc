import { useSelector } from 'react-redux';
import TableView from './TableView';
import CardView from './CardView';

const ContactList = () => {
  const tabular = useSelector((state) => state.tabular)

  return (
    <div className="col-md-9">
      <h2>Contact List</h2>
      { tabular && <TableView /> }
      { !tabular && <CardView /> }
    </div>
  )
}

export default ContactList;