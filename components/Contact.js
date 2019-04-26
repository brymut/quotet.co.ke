import DesktopContact from "./DesktopContact";
import MobileContact from "./MobileContact";
import PropTypes from "prop-types";

import React from "react";
import axios from "axios";

class Contact extends React.Component {
  state = {
    contacts: [],
    email: "",
    phone_number: ""
  };
  propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number.isRequired
    })
  };

  componentDidMount() {
    axios.get(`https://quotet-api.appspot.com/api/contacts/`).then(res => {
      const contacts = [];
      for (let contact of res.data) {
        if (contact.contact_type.toLowerCase() === "email") {
          let email_address = contact.link.replace("http://", "").toLowerCase();
          this.setState({ email: email_address });
        } else if (contact.contact_type.toLowerCase() === "phone") {
          let phone_number = contact.link.replace("http://", "").toLowerCase();
          this.setState({ phone_number });
        } else {
          contacts.push(contact);
        }
      }
      this.setState({ contacts });
    });
  }

  render() {
    const Contact = this.props.width > 800 ? DesktopContact : MobileContact;

    return <Contact email={this.state.email} contacts={this.state.contacts} />;
  }
}
export default Contact;
