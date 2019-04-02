import Layout from "../components/Layout.js";
import Info from "../components/Info";
import ProductCorousel from "../components/ProductCorousel.js";

export default class Index extends React.Component {
  state = {
    years: [],
    open: false
  };
  responsive = {
    0: {
      items: 1
    },
    500: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    },
    1400: {
      items: 5
    }
  };
  stagePadding = {
    paddingLeft: 0, // in pixels
    paddingRight: 0
  };
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Info />
        <ProductCorousel
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        />
        <ProductCorousel
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        />
        <ProductCorousel
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        />
        <ProductCorousel
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        />
        <ProductCorousel
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        />
        <ProductCorousel
          responsive={this.responsive}
          stagePadding={this.stagePadding}
        />
      </Layout>
    );
  }
}
