import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { customInput } from "./fields";
import { validate } from "../validation";

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form id="question-section" onSubmit={handleSubmit}>
        <div className="user-info">
          <Field
            name="name"
            component={customInput}
            type="text"
            label="Name:"
          />

          <Field
            name="email"
            component={customInput}
            type="text"
            label="Email address:"
          />

          <Field
            name="phone"
            component={customInput}
            type="text"
            label="Phone Number:"
          />

          <Field
            name="subject"
            component={customInput}
            type="text"
            label="Subject:"
          />
        </div>
        <div className="message">
          <Field
            name="message"
            component={customInput}
            type="textbox"
            label="Your Message"
          />
        </div>

        <button type="submit">Send </button>
        <style global jsx>{`
          #question-section {
            display: grid;
          }
          @media only screen and (min-width: 950px) {
            #question-section {
              grid-template-columns: 1fr 1fr;
              grid-gap: 3%;
            }
          }
          /* Cosmetic form styles */
          /* body,
             button {
                font-family: "Poppins", sans-serif;
             } */

          /* Restrict the form's max-width for the sake of responsiveness; center the content */
          /* form {
              max-width: 320px;
              padding: 30px;
              margin: auto;
             } */

          /* Thick black bottom border applied to all text inputs */
          input:not([type="checkbox"]) {
            border-width: 0;
            border-bottom: 3px solid black;
            border-radius: 0;
          }

          /* Transition the text input label's font-size, color, and position when it moves */
          input:not([type="checkbox"]) + label {
            transition: all 0.2s;
          }

          /* Position the label so that it looks like a placeholder; disable clicking/tapping */
          input:not([type="checkbox"]) + label {
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
            color: black;
          }

          /* Move the text input label up above the input when the input is focused */
          /* Also, move the text input label above the input when there is content inside the input, so that the label doesn't obscure the content */
          input:not([type="checkbox"]):focus + label,
          .dirty input:not([type="checkbox"]) + label {
            font-size: 10px;
            top: -20px;
            color: red;
          }

          /* Reverse the order of the checkbox and its label, so that the checkbox appears to the right of the label without having to change the markup */
          .flex-row-reverse {
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
          }

          input {
            outline: 0;
            padding: 0;
          }

          input,
          label,
          button[type="submit"] {
            font-size: 22px;
          }

          select {
            height: 30px;
          }

          label {
            font-size: 16px;
          }

          .custom-input-container,
          .custom-select-container {
            position: relative;
            margin: 0 0 25px 0;
          }

          select {
            display: block;
          }

          select,
          input:not([type="checkbox"]),
          button[type="submit"] {
            width: 100%;
          }

          button[type="submit"] {
            background-color: white;
            color: red;
          }

          /* Validation styles */
          .valid input {
            border-color: red;
          }

          .invalid input {
            border-color: white;
          }

          .error-text {
            background-color: white;
            color: darkorchid;
            margin-top: 10px;
            position: relative;
          }

          .error-text::before {
            content: "";
            border-color: transparent transparent red transparent;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 8px 8px 7px;
            position: absolute;
            left: 20px;
            top: -8px;
          }
        `}</style>
      </form>
    );
  }
}

ContactForm = reduxForm({
  form: "register",
  validate
})(ContactForm);

export default ContactForm;
