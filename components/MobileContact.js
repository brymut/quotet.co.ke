import DesktopContact from "./DesktopContact";
import Modal from "react-responsive-modal";

class MobileContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      item: {}
    };
  }

  state = {
    open: false,
    item: {}
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    // axios
    //   .get(`https://quotet-api.appspot.com/api/items/${this.props.item.id}/`)
    //   .then(res => {
    //     const item = res.data;
    //     this.setState({ item });
    //   });
  }

  render() {
    const { item, isLoading } = this.state;

    return (
      <div className="head-contact">
        <div className="events">
          <a className="header-link" href="/events">
            Events
          </a>
        </div>
        <div className="contact" onClick={this.onOpenModal}>
          <a className="header-link">Contact</a>
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center />
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
