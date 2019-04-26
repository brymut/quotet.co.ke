import Layout from "../components/Layout.js";
import Info from "../components/Info";
import ProductCorousel from "../components/ProductCorousel.js";
import axios from "axios";

export default class Index extends React.Component {
  state = {
    categories: [],
    items: []
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
  componentDidMount() {
    axios.get(`https://quotet-api.appspot.com/api/categories/`).then(res => {
      const categories = [];
      for (let category of res.data) {
        if (category.count > 0) {
          categories.push(category);
        }
      }
      this.setState({ categories });
    });
  }
  render() {
    const categories = this.state.categories;
    const items = this.state.items;
    return (
      <Layout>
        <Info />
        {categories && categories.length > 0 ? (
          categories.map(category => (
            <ProductCorousel
              responsive={this.responsive}
              stagePadding={this.stagePadding}
              category={category}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Layout>
    );
  }
}
