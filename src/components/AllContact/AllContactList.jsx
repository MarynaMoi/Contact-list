import { useSelector, useDispatch } from 'react-redux';

import UserContact from '../UserContact/UserContact';
import styles from './AllContactList.module.css';
import { addNewContact } from './../../store/actions/contactActions';

function AllContactList ({onDeleteContact}) {
  const dispatch = useDispatch();
  const userContacts = useSelector(state => state.contactsUser);

  return (
    <div className={styles['all-contact-div']}>
      {userContacts.map(item => (
        <UserContact key={item.id} contact={item} deleteContact={onDeleteContact} />
      ))}

      <button
        className={styles['add-contact-btn']}
        onClick={() => dispatch(addNewContact())}
      >
        New
      </button>
    </div>
  );
}

export default AllContactList;
