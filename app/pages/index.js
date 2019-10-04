import Layout from '../components/Layout';
import Products from './products';

import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "closettedevelopment.myshopify.com",
  storefrontAccessToken: "e4ef2d5a0c741c17791bb1dab8cfbb2b"
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

  console.log("products: ", products);
  
  return { products, client };
}

export default Index;