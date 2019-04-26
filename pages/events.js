import Layout from "../components/Layout.js";
import Event from "../components/Event";
import axios from "axios";

export default class Index extends React.Component {
  state = {
    events: [],
    items: []
  };

  componentDidMount() {
    axios.get(`https://quotet-api.appspot.com/api/events/`).then(res => {
      const events = [];
      for (let event of res.data) {
        events.push(event);
      }
      this.setState({ events });
    });
  }
  render() {
    const events = this.state.events;
    return (
      <Layout>
        <section className="event-list">
          {events && events.length > 0 ? (
            events.map(event => <Event info={event} />)
          ) : (
            <p>Loading...</p>
          )}
        </section>
        <style global jsx>{`
          .event-list {
            display: grid;
            grid-template-rows: 1fr;
            grid-gap: 2%;
            padding: 2.5%;
          }

          @media only screen and (max-width: 800px) {
            .info {
              grid-template-columns: 1fr;
              width: 90%;
              padding: 5%;
            }
          }
        `}</style>
      </Layout>
    );
  }
}
