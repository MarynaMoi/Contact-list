
import styles from './ContactFormInput.module.css'


function ContactFormInput ({handleChange, clearInput, name, placeholder, value}) {
  const onClearInput = ev => {
    ev.stopPropagation()
    clearInput(name)
  }

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
  )
}

export default ContactFormInput
