import Modal from "react-responsive-modal";
import { SimpleImg } from "react-simple-img";
import { Spinner } from "./Spinner";
import axios from "axios";
import { FileUploaderSkeleton } from "carbon-components-react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLoading: true,
      item: {}
    };
  }
  // handleImageErrored() {
  //   this.setState({ imageStatus: "failed to load" });
  // }

  state = {
    open: false,
    isLoading: true,
    item: {}
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  handleImageLoaded() {
    console.log("done");
    this.setState({ isLoading: false });
  }
  componentDidMount() {
    axios
      .get(`https://quotet-api.appspot.com/api/items/${this.props.item.id}/`)
      .then(res => {
        const item = res.data;
        this.setState({ item });
      });
  }

  render() {
    const { item, isLoading } = this.state;

    return (
      <div>
        <div className="item" onClick={this.onOpenModal}>
          <img
            src={item.image}
            alt=""
            className="item-img"
            onLoad={this.handleImageLoaded.bind(this)}
            // onError={this.handleImageErrored.bind(this)}
          />
          {isLoading === true ? <Spinner /> : <br />}
          <br />
          <h1 className="item-name">{item.name}</h1>
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <SimpleImg
              placeholder="red"
              className="item-img"
              src={item.image}
            />
            {/* <img src={this.props.item.image} alt="" className="item-img" /> */}
          </div>
        </Modal>
        <style global jsx>{`
          .item {
            border: solid #c02014;
            padding: 2.5%;
            margin: 2.5%;
            max-width: 400px;
          }
          .item-name {
            width: 75%;
            text-align: center;
            margin: auto;
          }
          .item-desc {
            width: 75%;
            text-align: center;
            margin: auto;
          }
          .item-img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 90%;
            max-height: 200px;
          }
          @media only screen and (max-width: 600px) {
            .item {
              padding: 5%;
            }
          }
        `}</style>
      </div>
    );
  }
}

// class ProductDetails extends React.Component {
//   state = {
//     open: false
//   };

//   onOpenModal = () => {
//     this.setState({ open: true });
//   };

//   onCloseModal = () => {
//     this.setState({ open: false });
//   };

//   render() {}
// }

export default Product;

// import React from 'react';
// import { css } from '@emotion/core';
// // First way to import
// import { ClipLoader } from 'react-spinners';

// const override = css`
//     display: block;
//     margin: 0 auto;
//     border-color: red;
// `;

// class AwesomeComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true
//     }
//   }
//   render() {
//     return (
//       <div className='sweet-loading'>
//         <ClipLoader
//           css={override}
//           sizeUnit={"px"}
//           size={150}
//           color={'#123abc'}
//           loading={this.state.loading}
//         />
//       </div>
//     )
//   }
// }
