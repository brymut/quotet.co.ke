const Event = props => (
  <div className="event">
    <h1>{props.info.title}</h1>
    <div className="event-body">
      <p>{props.info.content}</p>
      <img src="http://dummyimage.com/250" alt="" />
    </div>

    <style global jsx>{`
      .event {
        border: solid #c02014;
        padding: 2%;
      }
      .event h1 {
        color: #c02014;
        font-size: xx-large;
      }
      .event-body {
        display: grid;
        grid-template-columns: 3fr 1fr;
      }

      @media only screen and (max-width: 650px) {
        .event-body {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);

export default Event;
