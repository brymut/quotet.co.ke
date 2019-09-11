import Layout from "../components/Layout.js";
import ContactForm from "../components/ContactForm";
import { Spinner } from "../components/Spinner";

import ReactSVG from "react-svg";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReactGA from "react-ga";

const reducers = {
  form: formReducer
};
const reducer = combineReducers(reducers);
let store = createStore(
  reducer
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class Index extends React.Component {
  state = {
    contacts: [],
    items: []
  };

  componentDidMount() {
    axios.get(`https://quotet-api.appspot.com/api/contacts/`).then(res => {
      const contacts = [];
      for (let contact of res.data) {
        contacts.push(contact);
      }
      this.setState({ contacts });
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <Provider store={store}>
        <Layout>
          <section className="contacts">
            <ul className="contact-list">
              {contacts && contacts.length > 0 ? (
                contacts.map(contact =>
                  contact.contact_type.toLowerCase() === "email" ? (
                    <li className="contact">
                      <a
                        href={`mailto:${contact.link
                          .replace("http://", "")
                          .toLowerCase()}`}
                      >
                        <div className="contact-logo">
                          <ReactSVG
                            src="/static/outline-email-24px.svg"
                            svgStyle={{
                              fill: "#c02014",
                              width: "30px",
                              marginTop: "10px"
                            }}
                          />
                        </div>
                        <div className="contact-info">
                          <p>{`${contact.link
                            .replace("http://", "")
                            .toLowerCase()}`}</p>
                        </div>
                      </a>
                    </li>
                  ) : contact.contact_type.toLowerCase() === "instagram" ? (
                    <li className="contact">
                      <a href={contact.link}>
                        <div className="contact-logo">
                          <ReactSVG
                            src="/static/instagram.svg"
                            svgStyle={{
                              fill: "#c02014",
                              width: "25px",
                              marginTop: "10px",
                              marginLeft: "2px;"
                            }}
                          />
                        </div>
                        <div className="contact-info">
                          <p>{contact.contact_type}</p>
                        </div>
                      </a>
                    </li>
                  ) : contact.contact_type.toLowerCase() === "facebook" ? (
                    <li className="contact">
                      <a href={contact.link}>
                        <div className="contact-logo">
                          <ReactSVG
                            src="/static/facebook.svg"
                            svgStyle={{
                              fill: "#c02014",
                              width: "25px",
                              marginTop: "10px",
                              marginLeft: "2px;"
                            }}
                          />
                        </div>
                        <div className="contact-info">
                          <p>{contact.contact_type}</p>
                        </div>
                      </a>
                    </li>
                  ) : (
                    <li className="contact">
                      <a href={contact.link}>{contact.contact_type}</a>
                    </li>
                  )
                )
              ) : (
                <Spinner></Spinner>
              )}
            </ul>
          </section>
          <section className="contact-form">
            <ContactForm />
          </section>
          {/* <Contact info={contact} /> */}
          <style global jsx>
            {`
              .contact-list {
                display: grid;
                grid-template-rows: repeat(auto-fit, 48px);
                grid-gap: 2%;
                padding: 2.5%;
                list-style-type: none;
                width: 33%;
              }
              .contact-logo {
                float: left;
                width: 35%;
              }
              .contact-info {
                float: left;
                width: 65%;
              }

              @media only screen and (max-width: 800px) {
                .info {
                  grid-template-columns: 1fr;
                  width: 90%;
                  padding: 5%;
                }
              }
              .contacts {
                margin-left: 10%;
                margin-right: auto;
                marigin-bottom: auto;
                min-width: 300px;
                // margin: auto;
                width: 65%;
                max-width: 320px;
                padding-top: 3%;
                padding-inline-end: 3%;
                padding-inline-start: 3%;
                padding-bottom: 3%;
              }
              .contact-form {
                margin-left: 10%;
                margin-right: auto;
                marigin-bottom: auto;
                min-width: 250px;
                // margin: auto;
                width: 65%;
                max-width: 320px;
                border: 3px solid #c02014 !important;
                padding-top: 3%;
                padding-inline-end: 3%;
                padding-inline-start: 3%;
                padding-bottom: 3%;
              }
              @media only screen and (min-width: 1024px) {
                .contacts {
                  margin-left: 5%;
                }
                .contact-form {
                  margin-left: 5%;
                }
              }
              @media only screen and (min-width: 950px) {
                .contacts {
                  margin-left: 5%;
                }
                .contact-form {
                  margin-left: 5%;
                  margin-right: 5%;
                  width: 80%;
                  max-width: 1200px;
                }
              }
            `}
          </style>
        </Layout>
      </Provider>
    );
  }
}
