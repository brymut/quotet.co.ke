import React from "react";
import AliceCarousel from "react-alice-carousel";
import ReactSVG from "react-svg";
import Product from "./Product";

// const ProductCorousel = props => {
//   const handleOnDragStart = e => e.preventDefault();
// };

// const SomethingElse = props => ({
//   /* {props.children} */
// });
class ProductCorousel extends React.Component {
  items = [1, 2, 3, 4, 5];

  state = {
    galleryItems: this.items.map(i => <h2 key={i}>{i}</h2>)
  };

  thumbItem = (item, i) => (
    <span key={item} onClick={() => this.Carousel._onDotClick(i)}>
      *{" "}
    </span>
  );

  render() {
    return (
      <div>
        <h1 className="product-cat">Necklaces</h1>
        <div id="carousel-cont">
          <button id="prev-button" onClick={() => this.Carousel._slidePrev()}>
            <ReactSVG
              src="/static/outline-chevron_left-24px.svg"
              svgStyle={{ fill: "red" }}
            />
          </button>
          <div id="carousel">
            <AliceCarousel
              dotsDisabled={true}
              buttonsDisabled={true}
              ref={el => (this.Carousel = el)}
              mouseDragEnabled
              responsive={this.props.responsive}
              stagePadding={this.props.stagePadding}
            >
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />

              {/* <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <br />
                <br />
                <h1 className="item-name">Item 1</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 2</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 3</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 4</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 6</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 5</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 7</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 8</h1>
              </div>
              <div className="item">
                <img
                  src="https://dummyimage.com/250"
                  alt=""
                  className="item-img"
                />
                <h1 className="item-name">Item 9</h1>
              </div> */}
              {/* <img
              src="/img4"
              onDragStart={handleOnDragStart}
              className="yours-custom-class"
            />
            <img
              src="/img5"
              onDragStart={handleOnDragStart}
              className="yours-custom-class"
            /> */}
            </AliceCarousel>
          </div>
          <button id="next-button" onClick={() => this.Carousel._slideNext()}>
            <ReactSVG
              src="/static/outline-chevron_right-24px.svg"
              svgStyle={{ fill: "red" }}
            />
          </button>
        </div>

        <style global jsx>{`
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
              height: 315px;
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
          }
        `}</style>
      </div>
    );
  }
}
export default ProductCorousel;
