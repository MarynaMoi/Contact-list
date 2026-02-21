import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactFormInput from '../ContactFormInput/ContactFormInput';
import {
  addContact,
  addNewContact,
  updateContact,
} from '../../store/actions/contactActions';
import api from '../../api/contact-service';
import styles from './ContactForm.module.css';

function ContactForm ({ deleteContact }) {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact);

  const onSaveContact = ev => {
    ev.preventDefault();

    if (!contact.id) {
      const newContact = { ...contact, id: nanoid() };

      api
        .post('/', newContact)
        .then(response => {
          dispatch(addContact(response.data));
          dispatch(addNewContact());
        })
        .catch(error => {
          console.error('Error creating contact:', error);
        });
    } else {
      api
        .put(`/${contact.id}`, contact)
        .then(response => {
          dispatch(updateContact(response.data));
        })
        .catch(error => {
          console.error('Error updating contact:', error);
        });
    }
  };

  const onDeleteContact = ev => {
    ev.preventDefault();
    deleteContact(contact.id);
  };

  return (
    <>
      <form className={styles['redaction-contact-div']}>
        <ContactFormInput
          name='firstName'
          placeholder='First Name'
          value={contact.firstName}
        />

        <ContactFormInput
          name='lastName'
          placeholder='Last Name'
          value={contact.lastName}
        />

        <ContactFormInput
          name='email'
          placeholder='Email'
          value={contact.email}
        />

        <ContactFormInput
          name='phone'
          placeholder='Phone'
          value={contact.phone}
        />
        <div className={styles['divSaveAndDelete']}>
          <button onClick={onSaveContact}>Save</button>
          {contact.id !== null && (
            <button onClick={onDeleteContact}>Delete</button>
          )}
        </div>
      </form>
    </>
  );
}

export default ContactForm;
