import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const Home = () => {
  return (
    <div className="row">
      <Filter />
      <ContactList />
    </div>
  )
}

export default Home;