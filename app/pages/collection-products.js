import axios from "axios/index";
import Page from "../layouts/page";
import { Link } from "../../config/routes";

const CollectionProducts = props => {
  return (
    <Page title={props.title}>
      <h1>
        CXN
        {props.title}
      </h1>
      <span>{props.collection.name}</span>
      {props.collection.products.map((product, i) => (
        <Link
          route="product_detail"
          params={{ id: props.collection.id, prodId: product.id }}
          key={i}
        >
          <a>{product.name}</a>
        </Link>
      ))}
    </Page>
  );
};

CollectionProducts.getInitialProps = async req => {
  const response = await axios(
    `${process.env.API_URL}/collections/${req.query.id}/products`
  );
  return { ...response.data };
};

CollectionProducts.defaultProps = {
  collection: {
    products: []
  },
  title: ""
};

export default CollectionProducts;
