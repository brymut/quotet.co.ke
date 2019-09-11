import Contact from "./Contact";
import { Spinner } from "./Spinner";

import React from "react";
import sizeMe from "react-sizeme";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import axios from "axios";

class Header extends React.Component {
  state = {
    pageLoaded: false,
    contacts: []
  };
  propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  };

  componentDidMount() {
    axios.get(`https://quotet-api.appspot.com/api/contacts/`).then(res => {
      const contacts = [];
      for (let contact of res.data) {
        contacts.push(contact);
      }
      this.setState({ contacts });
    });
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div id="header">
        <div className="logos">
          <a href="/">
            <img
              src="/static/Quotet_Handmade_Producers.png"
              alt="quotet handmade producers logo"
              className="logo1"
            />
          </a>
          <div id="contact-home">
            {contacts && contacts.length > 0 ? (
              contacts.map(contact =>
                contact.contact_type.toLowerCase() === "email" ? (
                  <a
                    href={`mailto:${contact.link
                      .replace("http://", "")
                      .toLowerCase()}`}
                  >
                    <ReactSVG
                      src="/static/outline-email-24px.svg"
                      svgStyle={{
                        fill: "#c02014",
                        width: "30px"
                      }}
                      className="contact-email"
                    />
                  </a>
                ) : contact.contact_type.toLowerCase() === "instagram" ? (
                  <a href={contact.link}>
                    <ReactSVG
                      src="/static/instagram.svg"
                      svgStyle={{
                        fill: "#c02014",
                        width: "22px"
                      }}
                    />
                  </a>
                ) : contact.contact_type.toLowerCase() === "facebook" ? (
                  <a href={contact.link}>
                    <ReactSVG
                      src="/static/facebook.svg"
                      svgStyle={{
                        fill: "#c02014",
                        width: "22px"
                      }}
                    />
                  </a>
                ) : (
                  <li className="contact">
                    <a href={contact.link}>{contact.contact_type}</a>
                  </li>
                )
              )
            ) : (
              <Spinner></Spinner>
            )}
          </div>

          {/* <div id="contact-home">
            <a>
              <ReactSVG
                src="/static/facebook.svg"
                svgStyle={{
                  fill: "#c02014",
                  width: "25px",
                  marginTop: "10px",
                  marginLeft: "2px;"
                }}
              />
            </a>
            <a>
              <ReactSVG
                src="/static/instagram.svg"
                svgStyle={{
                  fill: "#c02014",
                  width: "25px",
                  marginTop: "10px",
                  marginLeft: "2px;"
                }}
              />
            </a>
            <a>
              <ReactSVG
                src="/static/facebook.svg"
                svgStyle={{
                  fill: "#c02014",
                  width: "25px",
                  marginTop: "10px",
                  marginLeft: "2px;"
                }}
              />
            </a>
            <a>
              <ReactSVG
                src="/static/facebook.svg"
                svgStyle={{
                  fill: "#c02014",
                  width: "25px",
                  marginTop: "10px",
                  marginLeft: "2px;"
                }}
              />
            </a>
          </div> */}
        </div>
        <Contact width={this.props.size.width} />

        <style jsx>{`
          #header {
            height: 10%;
            width: 100%;
            // position: fixed;
            top: 0;
            left: 0;
            padding: 0;
            margin: 0;
            z-index: 1;
            overflow-x: hidden;
          }

          #header h1 {
            color: white;
            font-size: 24px;
            margin-left: 45%;
            float: left;
          }
          .logos {
            float: left;
            width: 50%;
          }
          .logo1 {
            margin-left: 5%;
            margin-top: 5%;
          }
          .logo5 {
            margin-left: -21%;
            margin-top: -10%;
            position: fixed;
            background: white;
            border: solid #c02014;
            z-index: 5;
            max-width: 150px;
          }
          .head-content {
            margin-top: 2.5%;
            width: 50%;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .head-content button {
            border: solid #c02014;
            background-color: white;
            font-size: larger;
          }
          #contact-home {
            display: grid;
            grid-template-areas: "a a a a";
            grid-gap: 10px;
            grid-auto-columns: 45px;
            margin-left: 5%;
            margin-top: 2%;
          }
          .contact-email {
            margin-left: -5px;
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
          }
          .contact-channels {
            margin-top: 5%;
          }
          .contact-channels a {
            border: solid #c02014;
            margin-top: 2%;
            padding-top: 2%;
            display: grid;
            grid-template-columns: 1fr 4fr;
            line-height: 20px;
          }
          @media only screen and (max-width: 600px) {
            #header h1 {
              margin-left: 40%;
            }
          }
          @media only screen and (min-width: 1450px) {
            .logo5 {
              margin-left: -18%;
              margin-top: -8%;
            }
          }

          @media only screen and (max-width: 1110px) {
            .logo5 {
              margin-left: -27%;
              margin-top: -15%;
              width: 17%;
            }
          }
          @media only screen and (max-width: 815px) {
            .logo5 {
              margin-left: -27%;
              margin-top: -20%;
            }
          }
          @media only screen and (max-width: 615px) {
            .logo1 {
              width: 60%;
            }
          }
          @media only screen and (max-width: 440px) {
            .logo1 {
            }
          }
        `}</style>
      </div>
    );
  }
}

export default sizeMe({ monitorWidth: true })(Header);
