import React from "react";

class DesktopContact extends React.Component {
  render() {
    const contacts = this.props.contacts;
    const email = this.props.email;

    return (
      <div className="head-contact">
        <div className="events">
          <a className="header-link" href="/events">
            Events
          </a>
        </div>
        <div className="contact">
          <a className="header-link" href="/contact">
            Contact
          </a>
          <br />
        </div>
        <style jsx>{`
          .head-contact {
            margin-top: 2.5%;
            float: right;
            width: 50%;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .head-content button {
            border: solid #c02014;
            background-color: white;
            font-size: larger;
          }
          #events-link {
            border: solid #c02014;
            margin-left: 25%;
            margin-right: 25%;
            width: 50%;
            padding: 0;
          }
          .header-link {
            border: solid #c02014;
            margin-left: 25%;
            margin-right: 25%;
            margin-bottom: 2%;
            width: 50%;
            padding-left: 10%;
            padding-right: 10%;
            padding-top: 1.5%;
            padding-bottom: 1.5%;
            text-decoration: none;
          }
          a:link {
            color: black;
          }

          a:visited {
            color: black;
            text-decoration: none;
          }

          a:focus {
            border-bottom: 1px solid;
            background: #c02014;
            color: white;
          }

          a:hover {
            border-bottom: 1px solid;
            background: #c02014;
            color: white;
          }

          a:active {
            background: white;
            color: red;
          }
          .contact-channels {
            margin-top: 5%;
            width: 90%;
          }
          .contact-channels a {
            border: solid #c02014;
            margin-top: 2%;
            padding-top: 2%;
            display: grid;
            grid-template-columns: 1fr 4fr;
            line-height: 20px;
            color: black;
          }
          @media only screen and (max-width: 600px) {
          }
          @media only screen and (min-width: 1450px) {
          }

          @media only screen and (max-width: 1110px) {
          }
          @media only screen and (max-width: 940px) {
          }
          @media only screen and (max-width: 775px) {
          }
          @media only screen and (max-width: 615px) {
          }
          @media only screen and (max-width: 440px) {
          }
        `}</style>
      </div>
    );
  }
}

export default DesktopContact;
