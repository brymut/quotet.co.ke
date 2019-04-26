import React from "react";
import TrackVisibility from "react-on-screen";
import ScrollPercentage from "react-scroll-percentage";
import anime from "animejs";
import sizeMe from "react-sizeme";
import PropTypes from "prop-types";
import Contact from "./Contact";

class Header extends React.Component {
  state = {
    pageLoaded: false
  };
  propTypes = {
    size: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    })
  };
  //   componentDidMount() {
  //     anime({
  //       targets: ".logo1",
  //       translateX: 250,
  //       rotate: "1turn",
  //       backgroundColor: "#FFF",
  //       duration: 800
  //     });
  //   }

  //   componentDidUpdate(prevProps) {
  //     console.log(prevProps);
  //   }

  animate = inView => {
    if (!inView) {
      let pageLoaded = this.state.pageLoaded;
      if (pageLoaded === false) {
        // console.log("set");
        pageLoaded = true;
      }
      //   console.log("its gons");
      anime({
        targets: ".logo5",
        translateY: "100%",
        duration: 800
      });
      this.setState({ pageLoaded });
    } else {
      //   console.log("its hers");
      anime({
        targets: ".logo5",
        translateY: "-30%",
        duration: 800
      });
    }
  };

  render() {
    return (
      <ScrollPercentage onChange={(percentage, inView) => this.animate(inView)}>
        <div id="header">
          <div className="logos">
            <a href="/">
              <img
                src="/static/Quotet_Handmade_Producers.png"
                alt="quotet handmade producers logo"
                className="logo1"
              />
            </a>
            <a href="/">
              <img
                src="/static/Quotet_Handmade_Producers.png"
                alt="quotet handmade producers logo"
                className="logo5"
              />
            </a>
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
            @media only screen and (max-width: 940px) {
              .logo1 {
                width: 60%;
                margin-top: 0%;
                margin-left: 10%;
              }
              .logo5 {
                margin-left: -27%;
                margin-top: -15%;
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
      </ScrollPercentage>
    );
  }
}
export default sizeMe({ monitorWidth: true })(Header);
