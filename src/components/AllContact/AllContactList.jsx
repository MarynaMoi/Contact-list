import PropTypes from 'prop-types';
import styles from './AllContactList.module.css';
import UserContact from '../UserContact/UserContact';

function AllContactList ({
  userContacts,
  selectContact,
  addNewContact,
  deleteContact,
}) {
  return (
    <div className={styles['all-contact-div']}>
      {userContacts.map(item => (
        <UserContact
          key={item.id}
          contact={item}
          selectContact={selectContact}
          deleteContact={deleteContact}
        />
      ))}
      <button className={styles['add-contact-btn']} onClick={addNewContact}>
        New
      </button>
    </div>
  );
}

AllContactList.propTypes = {
  userContacts: PropTypes.array,
  selectContact: PropTypes.func,
  addNewContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func,
};
AllContactList.defaultProps = {
  userContacts: [],
};
export default AllContactList;
