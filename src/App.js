import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts/edit/:id" element={<EditContact />} />
          <Route path="/contacts/:id" element={<Contacts />} />
          <Route path="/contacts/new" element={<NewContact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
