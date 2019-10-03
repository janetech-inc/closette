import Layout from '../components/Layout';
import Products from './products';

import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "graphql.myshopify.com",
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38"
});

const Index = props => (
  <Layout>
    <div>
      <Products products={props.products}/>
    </div>
  </Layout>
);

Index.getInitialProps = async() => {
  const products = await client.product.fetchAll().then((res) => {
    console.log("res: ", res)
    return res;
  }).catch(err => console.log(err));
  
  return { products, client };
}

export default Index;