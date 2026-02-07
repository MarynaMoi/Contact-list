import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./App.module.css";
import AllContactList from "./components/AllContact/AllContactList";
import ContactForm from "./components/ContactForm/ContactForm";

class App extends Component {
  state = {
    userContacts: [],
    contact: this.createNewContact(),
  };

  componentDidMount() {
    this.getFromLocalStor();
  }

  getFromLocalStor() {
    const userData = JSON.parse(localStorage.getItem("userContacts"));
    this.setState({ userContacts: userData || [] });
  }

  saveToLocalStor = () => {
    localStorage.setItem(
      "userContacts",
      JSON.stringify(this.state.userContacts),
    );
  };

  selectContact = (contact) => {
    this.setState({ contact: contact });
  };

  createNewContact() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      id: null,
    };
  }

  addNewContact = () => {
    this.setState({ contact: this.createNewContact() });
  };

  saveContact = (contact) => {
    if (!contact.id) {
      contact.id = nanoid();
      this.setState(
        (prev) => ({
          userContacts: [...prev.userContacts, contact],
          contact: this.createNewContact(),
        }),
        this.saveToLocalStor,
      );
    } else {
      this.setState(
        (prev) => ({
          userContacts: prev.userContacts.map((item) =>
            item.id === contact.id ? contact : item,
          ),
        }),
        this.saveToLocalStor,
      );
    }
  };

  deleteContact = (id) => {
    this.setState(
      (prev) => ({
        userContacts: prev.userContacts.filter((item) => item.id !== id),
        contact: this.createNewContact(),
      }),
      this.saveToLocalStor,
    );
  };

  render() {
    return (
      <>
        <div className={styles["title"]}>Contact list</div>
        <div className={styles["list-and-redaction-div"]}>
          <AllContactList
            userContacts={this.state.userContacts}
            selectContact={this.selectContact}
            addNewContact={this.addNewContact}
            deleteContact={this.deleteContact}
          />
          <ContactForm
            saveContact={this.saveContact}
            contact={this.state.contact}
            deleteContact={this.deleteContact}
            createNewContact={this.createNewContact}
          />
        </div>
      </>
    );
  }
}

export default App;
