import { nanoid } from 'nanoid'
import styles from './App.module.css'
import AllContactList from './components/AllContact/AllContactList'
import ContactForm from './components/ContactForm/ContactForm'
import { useState, useEffect } from 'react'

function App () {
  const createNewContact = () => {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      id: null
    }
  }

  const [userContacts, setUserContacts] = useState([])
  const [contact, setContact] = useState(createNewContact())

  const getFromLocalStor = () => {
    const userData = JSON.parse(localStorage.getItem('userContacts'))
    setUserContacts(userData || [])
  }
  useEffect(getFromLocalStor, [])

  const saveToLocalStor = user => {
    localStorage.setItem('userContacts', JSON.stringify(user))
  }

  const selectContact = contact => {
    setContact(contact)
  }

  const addNewContact = () => {
    setContact(createNewContact())
  }

  const saveContact = formContact => {
    if (!formContact.id) {
      formContact.id = nanoid()
      const updatedUserContacts = [...userContacts, formContact]
      setUserContacts(updatedUserContacts)
      setContact(createNewContact())
      saveToLocalStor(updatedUserContacts)
    } else {
      const updatedUserContacts = userContacts.map(item =>
        item.id === formContact.id ? formContact : item
      )
      setUserContacts(updatedUserContacts)

      saveToLocalStor(updatedUserContacts)
    }
  }

  const deleteContact = id => {
    const user = userContacts.filter(item => item.id !== id)
    setUserContacts(user)
    setContact(createNewContact())

    saveToLocalStor(user)
  }

  return (
    <>
      <div className={styles['title']}>Contact list</div>
      <div className={styles['list-and-redaction-div']}>
        <AllContactList
          userContacts={userContacts}
          selectContact={selectContact}
          addNewContact={addNewContact}
          deleteContact={deleteContact}
        />
        <ContactForm
          saveContact={saveContact}
          contactData={contact}
          deleteContact={deleteContact}
          createNewContact={createNewContact}
        />
      </div>
    </>
  )
}

export default App
