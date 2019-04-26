import React from "react";
import AliceCarousel from "react-alice-carousel";
import ReactSVG from "react-svg";
import Product from "./Product";
import axios from "axios";

// const ProductCorousel = props => {
//   const handleOnDragStart = e => e.preventDefault();
// };

// const SomethingElse = props => ({
//   /* {props.children} */
// });
class ProductCorousel extends React.Component {
  //   state = {
  //     galleryItems: this.items.map(i => <h2 key={i}>{i}</h2>)
  //   };
  state = {
    items: []
  };

  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel._onDotClick(i)}>
      *{" "}
    </span>
  );
  componentWillMount() {}
  componentDidMount() {
    axios
      .get(
        `https://quotet-api.appspot.com/api/categories/${
          this.props.category.id
        }/items`
      )
      .then(res => {
        const raw_items = [];
        for (let item of res.data) {
          raw_items.push(item);
        }
        let items = raw_items.map(item => <Product item={item} />);
        this.setState({ items });
      });
  }

  render() {
    const items = this.state.items;
    const categoryName = this.props.category.name;

    return (
      <div className="product-cont">
        <h1 className="product-cat">{categoryName}</h1>
        <div id="carousel-cont">
          <button id="prev-button" onClick={() => this.Carousel._slidePrev()}>
            <ReactSVG
              src="/static/outline-chevron_left-24px.svg"
              svgStyle={{ fill: "red" }}
            />
          </button>
          <div id="carousel">
            <AliceCarousel
              items={items}
              dotsDisabled={true}
              buttonsDisabled={true}
              ref={el => (this.Carousel = el)}
              mouseDragEnabled
              responsive={this.props.responsive}
              stagePadding={this.props.stagePadding}
            />
          </div>
          <button id="next-button" onClick={() => this.Carousel._slideNext()}>
            <ReactSVG
              src="/static/outline-chevron_right-24px.svg"
              svgStyle={{ fill: "red" }}
            />
          </button>
        </div>

        <style global jsx>{`
          .product-cont {
          }
          .product-cat {
            color: #c02014;
            margin-left: 2.5%;
            margin-top: 7.5%;
          }
          .child {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
          }
          #carousel-cont {
            position: relative;
            height: 375px;
            width: 90%;
            margin-left: 6%;
          }
          #prev-button {
            position: absolute;
            top: 50%;
            left: -3%;
            transform: translateY(-50%);
            float: left;
            border: 0;
          }
          #next-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            float: left;
            border: 0;
          }
          #carousel {
            width: 100%;
            float: left;
            margin-left: 0%;
          }
          @media only screen and (max-width: 600px) {
            #carousel-cont {
              width: 80%;
              margin-left: 10%;
              height: 315px;
            }
            #prev-button {
              left: -8%;
            }
          }
          @media only screen and (min-width: 1250px) {
            #carousel-cont {
              height: 315px;
            }
          }

          @media only screen and (max-width: 1150px) {
            #carousel-cont {
              height: 285px;
            }
          }
          @media only screen and (max-width: 1000px) {
            #carousel-cont {
              height: 255px;
            }
          }
          @media only screen and (max-width: 940px) {
          }
          @media only screen and (max-width: 775px) {
          }
          @media only screen and (max-width: 615px) {
          }
          @media only screen and (max-width: 440px) {
            #prev-button {
              left: -10%;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default ProductCorousel;
