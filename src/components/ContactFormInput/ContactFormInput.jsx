import { Component } from 'react'
import styles from './ContactFormInput.module.css'

class ContactFormInput extends Component {
  onClearInput = ev => {
    ev.stopPropagation()
    this.props.clearInput(this.props.name)
  }
  render () {
    return (
      <div className={styles.inputWrapper}>
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.handleChange}
        />

        {this.props.value && (
          <span className={styles.clearX} onClick={this.onClearInput}>
            ✕
          </span>
        )}
      </div>
    )
  }
}

export default ContactFormInput
