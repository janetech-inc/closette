import axios from "axios/index";
import Page from "../layouts/page";

const CollectionLooks = props => {
  return (
    <Page title={props.title}>
      <h1>
        CXN
        {props.title}
      </h1>
      <span>{props.collection.name}</span>
      {props.collection.looks.map((look, i) => (
        <div key={i}>{look.name}</div>
      ))}
    </Page>
  );
};

CollectionLooks.getInitialProps = async req => {
  const response = await axios(`${process.env.API_URL}/collections/${req.query.id}/looks`);
  return { ...response.data };
};

CollectionLooks.defaultProps = {
  collection: {
    looks: []
  },
  title: ""
};

export default CollectionLooks;
