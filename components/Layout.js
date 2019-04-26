import Shell from "./Shell";
import Header from "./Header";
import Head from "next/head";

//export default
class Layout extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleScrolling = this.handleScrolling.bind(this);
  }

  handleScrolling = () => {
    console.log("scrolling");
  };

  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Head>
          <title>Qoutet</title>
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

          <script
            crossOrigin="anonymous"
            src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CIntersectionObserverEntry"
          />
        </Head>
        <Header />

        <Shell onScroll={this.handleScrolling}>{this.props.children}</Shell>

        <style global jsx>{`
          @import "/static/alice-carousel.css";
          html,
          body {
            overflow-x: scroll;
          }
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
