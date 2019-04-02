const Product = props => (
  <div className="item">
    <img src="https://dummyimage.com/250" alt="" className="item-img" />
    <br />
    <br />
    <h1 className="item-name">Item 1</h1>
    <style global jsx>{`
      .item {
        border: solid #c02014;
        padding: 2.5%;
        margin: 2.5%;
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
      }
      @media only screen and (max-width: 600px) {
        .item {
          padding: 5%;
        }
      }
    `}</style>
  </div>
);

export default Product;
