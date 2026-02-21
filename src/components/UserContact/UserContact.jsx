import { useDispatch } from 'react-redux';
import {  selectContact} from './../../store/actions/contactActions';
import styles from './UserContact.module.css';

function UserContact ({ contact , deleteContact}) {
  const dispatch = useDispatch();

  const onDeleteContact = ev => {
    ev.stopPropagation();
    deleteContact(contact.id);
  };

  const onSelectContact = ev => {
    ev.stopPropagation();
    dispatch(selectContact(contact));
  };

  return (
    <div className={styles['user-contact']}>
      <div onDoubleClick={onSelectContact}>
        {contact.firstName} {contact.lastName}
        <span className={styles.deleteX} onClick={onDeleteContact}>
          X
        </span>
      </div>
    </div>
  );
}

export default UserContact;
