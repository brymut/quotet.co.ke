class MobileContact extends React.Component {
  render() {
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
        </div>
        <style jsx>{`
          .head-contact {
            height: 150px;
            margin-top: 4.5%;
            width: 40%;
            display: grid;
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
            /* padding: 10%; */
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
          @media only screen and (max-width: 370px) {
            .head-contact {
              height: 100px;
            }
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

// const MobileContact = props => (

// );

export default MobileContact;
