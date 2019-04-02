import React from "react";
import TrackVisibility from "react-on-screen";
import ScrollPercentage from "react-scroll-percentage";
import anime from "animejs";
import Slide from "@material-ui/core/Slide";
import Paper from "@material-ui/core/Paper";

class Header extends React.Component {
  state = {
    pageLoaded: false
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
            <a href="https://subcity.org">
              <img
                src="/static/Quotet_Handmade_Producers.png"
                alt="subcity logo"
                className="logo1"
              />
            </a>
            <a href="https://subcity.org">
              <img
                src="/static/Quotet_Handmade_Producers.png"
                alt="subcity logo"
                className="logo5"
              />
            </a>
          </div>
          <div className="head-content">
            <div className="events">
              <button id="events-button">Events</button>
            </div>
            <div className="contact">
              <button id="contact-button">Contact</button>
              <br />
              <div className="contact-channels">
                <a>Email</a>
                <a>Instagram</a>
                <a>Facebook</a>
                <a>Phone</a>
              </div>
            </div>
          </div>
          <style jsx>{`
            #header {
              height: 60px;
              width: 100%;
              // position: fixed;
              top: 0;
              left: 0;
              padding: 0;
              margin: 0;
              z-index: 1;
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
              margin-left: -14%;
              margin-top: -10%;
              position: fixed;
              background: white;
              border: solid #c02014;
              z-index: 5;
              max-width: 150px;
            }
            .head-content {
              margin-top: 2.5%;
              float: right;
              width: 50%;
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .head-content button {
              border: solid #c02014;
              background-color: white;
              font-size: larger;
            }
            #events-button {
              margin-left: 25%;
              margin-right: 25%;
              width: 50%;
              padding: 0;
            }
            #contact-button {
              margin-left: 25%;
              margin-right: 25%;
              width: 50%;
              padding: 0;
            }
            .contact-channels {
              display: grid;
              grid-template-rows: auto;
            }
            .contact-channels a {
              border: solid #c02014;
              margin-top: 2%;
              padding-top: 2%;
              padding-bottom: 2%;
            }
            @media only screen and (max-width: 600px) {
              #header h1 {
                margin-left: 40%;
              }
              .logos {
                display: block;
              }
              .logo1 {
                margin-left: 0;
              }
            }
            @media only screen and (min-width: 1450px) {
              .logo5 {
                margin-left: 1%;
                margin-top: -28%;
              }
            }

            @media only screen and (max-width: 1450px) {
              .logo1 {
                width: 80%;
              }
            }
            @media only screen and (max-width: 1110px) {
              .logo1 {
                width: 70%;
              }
              .logo5 {
                margin-left: -27%;
                margin-top: -10%;
                width: 17%;
              }
            }
            @media only screen and (max-width: 940px) {
              .logo1 {
                width: 60%;
              }
            }
            @media only screen and (max-width: 775px) {
              .logo1 {
                width: 50%;
              }
            }
            @media only screen and (max-width: 615px) {
              .logo1 {
                width: 40%;
              }
            }
            @media only screen and (max-width: 440px) {
              .logo1 {
                width: 30%;
              }
            }
          `}</style>
        </div>
      </ScrollPercentage>
    );
  }
}
export default Header;
