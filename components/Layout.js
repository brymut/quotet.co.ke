import Shell from "./Shell";
import Header from "./Header";
import Head from "next/head";
import ReactGA from "react-ga";

//export default
class Layout extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-144271320-11");
  }
  render() {
    return (
      <div>
        <Head>
          <title>Quotet</title>

          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Sans"
            rel="stylesheet"
          />
          <link rel="icon" href="/static/Quotet_Handmade_Producers.png" />
        </Head>
        <Header />

        <Shell>{this.props.children}</Shell>

        <style global jsx>{`
          @import "/static/alice-carousel.css";

          body {
            font-family: "Josefin Sans", sans-serif;
            letter-spacing: 0.05em;
            margin: 0;
            background-color: white;
          }
          button {
            font-family: "Josefin Sans", sans-serif;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;
