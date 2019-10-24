import React, { Fragment } from "react";
import Products from './products';

import Client from "shopify-buy";

const client = Client.buildClient({
  domain: "closettedevelopment.myshopify.com",
  storefrontAccessToken: "e4ef2d5a0c741c17791bb1dab8cfbb2b"
});

const Index = props => (
  <Fragment>
    <Products products={props.products}/>
  </Fragment>
);

Index.getInitialProps = async() => {
  const products = await client.product.fetchAll().then((res) => {
    return res;
  }).catch(err => console.log(err));
  
  return { products, client };
}

export default Index;