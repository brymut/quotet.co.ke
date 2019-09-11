import Layout from "../components/Layout.js";
import Info from "../components/Info";
import ProductCorousel from "../components/ProductCorousel.js";
import { Spinner } from "../components/Spinner";

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
    }
  };
  stagePadding = {
    paddingLeft: 0, // in pixels
    paddingRight: 0
  };

  async componentDidMount() {
    let categories = [
      ["Necklace", "NE"],
      ["Choker", "CH"],
      ["Waterfall", "WA"],
      ["Ring", "RI"],
      ["Earring", "EA"],
      ["Bracelet", "BR"]
    ];

    for (let category in categories) {
      await axios
        .get(
          `https://quotet-api.appspot.com/api/items/${categories[category][1]}`
        )
        .then(res => {
          const rawItems = [];
          for (let item of res.data) {
            rawItems.push(item);
          }
          if (rawItems.length > 0) {
            categories[category][2] = rawItems;
          }
        });
    }
    this.setState({ categories });
  }

  render() {
    let categories = this.state.categories;
    categories = categories.filter(category => category[2] !== undefined);
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
          <Spinner />
        )}
      </Layout>
    );
  }
}
