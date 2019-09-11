import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import moment from "moment";

// import { Spinner } from "../components/Spinner";

export default class Event extends React.Component {
  state = {
    eventImages: []
  };

  async componentDidMount() {
    console.log(moment(this.props.info.date).format("dddd, MMMM Do YYYY"));
    let eventImages = [];

    await axios
      .get(
        `https://quotet-api.appspot.com/api/events/image/${this.props.info.id}/`
      )
      .then(res => {
        eventImages = res.data.map(image => (
          <img src={image.image} alt={image.alt} />
        ));
        if (eventImages.length === 0) {
          eventImages = ["/static/Quotet_Handmade_Producers.png"].map(image => (
            <img src={image} alt="company logo"></img>
          ));
        }
      });
    this.setState({ eventImages });
    eventImages = [];
  }

  render() {
    const responsive = {
      0: { items: 1 },
      1024: { items: 1 }
    };
    const handleOnDragStart = e => e.preventDefault();
    return (
      <div className="event">
        <h1>{this.props.info.title}</h1>
        <h3>{moment(this.props.info.date).format("dddd, MMMM Do YYYY")}</h3>
        <h3>{this.props.info.location}</h3>
        <div className="event-body">
          <p>{this.props.info.content}</p>
          {/* <AliceCarousel
          items={items}
          dotsDisabled={true}
          buttonsDisabled={true}
          ref={el => (this.Carousel = el)}
          mouseDragEnabled
          responsive={this.props.responsive}
          stagePadding={this.props.stagePadding}
        /> */}
          <div className="cont">
            <AliceCarousel
              mouseDragEnabled
              items={this.state.eventImages}
              responsive={responsive}
            />
          </div>
        </div>

        <style global jsx>{`
          .cont {
            max-width: 400px;
            margin-left: 20%;
          }
          .event {
            border: solid #c02014;
            width: 96%;
            padding: 2%;
          }

          .event h1 {
            color: #c02014;
            font-size: xx-large;
            margin-bottom: 2%;
          }
          .event h3 {
            margin: 0;
            margin-bottom: 1%;
          }
          .event-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 90%;
            margin: auto;
            margin-top: 5%;
          }
          .event-body img {
            margin-left: 10%;
            margin-right: 10%;
            width: 80%;
          }

          @media only screen and (max-width: 850px) {
            .event-body {
              grid-template-columns: 1fr;
            }
            .cont {
              max-width: 400px;
              margin-left: 0px;
            }
          }
        `}</style>
      </div>
    );
  }
}
