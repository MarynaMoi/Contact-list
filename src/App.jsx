import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AllContactList from './components/AllContact/AllContactList';
import ContactForm from './components/ContactForm/ContactForm';
import { updateContacts, deleteContact,  addNewContact} from './store/actions/contactActions';
import api from './api/contact-service';
import styles from './App.module.css';

function App () {
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get('/')
      .then(({ data }) => {
        dispatch(updateContacts(data || []));
      })
      .catch(error => {
        console.error('Error fetching contacts:', error);
      });
  }, [dispatch]);



const onDeleteContact = (id) => {
    api
      .delete(`/${id}`)
      .then(() => {
        dispatch(deleteContact(id));
        dispatch(addNewContact());
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <>
      <div className={styles['title']}>Contact list</div>
      <div className={styles['list-and-redaction-div']}>
        <AllContactList onDeleteContact={onDeleteContact} />
        <ContactForm deleteContact={onDeleteContact} />
      </div>
    </>
  );
}

export default App;
