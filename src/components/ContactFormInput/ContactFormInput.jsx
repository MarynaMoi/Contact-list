import { useDispatch, useSelector } from 'react-redux';
import { selectContact } from '../../store/actions/contactActions';
import styles from './ContactFormInput.module.css';


function ContactFormInput ({ name, placeholder, value }) {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contact);

  const onClearInput = ev => {
    ev.stopPropagation();
    const updatedContact = { ...contact, [name]: '' };
    dispatch(selectContact(updatedContact));
  };

  const handleChange = ev => {
    const { name, value } = ev.target;
    const updatedContact = { ...contact, [name]: value };
    dispatch(selectContact(updatedContact));
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {value && (
        <span className={styles.clearX} onClick={onClearInput}>
          ✕
        </span>
      )}
    </div>
  );
}

export default ContactFormInput;
