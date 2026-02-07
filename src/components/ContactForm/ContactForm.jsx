import { Component } from "react";
import ContactFormInput from "../ContactFormInput/ContactFormInput";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    contact: this.props.contact,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.contact.id !== state.contact.id) {
      return {
        contact: props.contact,
      };
    }
    return null;
  }

  handleChange = (ev) => {
    const { name, value } = ev.target;

    this.setState((prev) => ({
      contact: {
        ...prev.contact,
        [name]: value,
      },
    }));
  };

  clearSelectInput = (fieldName) => {
    this.setState((prev) => ({
      contact: {
        ...prev.contact,
        [fieldName]: "",
      },
    }));
  };

  onSaveContact = (ev) => {
    ev.preventDefault();
    const contact = { ...this.state.contact };
    this.props.saveContact(contact);
    if (!this.state.contact.id) {
      this.setState({
        contact: this.props.createNewContact(),
      });
    }
  };

  onDeleteContact = (ev) => {
    ev.preventDefault();

    this.props.deleteContact(this.state.contact.id);
  };

  render() {
    return (
      <>
        <form className={styles["redaction-contact-div"]}>
          <ContactFormInput
            name="firstName"
            placeholder="First Name"
            value={this.state.contact.firstName}
            handleChange={this.handleChange}
            clearInput={this.clearSelectInput}
          />

          <ContactFormInput
            name="lastName"
            placeholder="Last Name"
            value={this.state.contact.lastName}
            handleChange={this.handleChange}
            clearInput={this.clearSelectInput}
          />

          <ContactFormInput
            name="email"
            placeholder="Email"
            value={this.state.contact.email}
            handleChange={this.handleChange}
            clearInput={this.clearSelectInput}
          />

          <ContactFormInput
            name="phone"
            placeholder="Phone"
            value={this.state.contact.phone}
            handleChange={this.handleChange}
            clearInput={this.clearSelectInput}
          />
          <div className={styles["divSaveAndDelete"]}>
            <button onClick={this.onSaveContact}>Save</button>
            {this.props.contact.id !== null && (
              <button onClick={this.onDeleteContact}>Delete</button>
            )}
          </div>
        </form>
      </>
    );
  }
}

export default ContactForm;
