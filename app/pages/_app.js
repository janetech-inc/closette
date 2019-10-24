import React from 'react'
import App from 'next/app'
import Client from "shopify-buy";
import Layout from '../components/Layout';
import Cart from '../components/checkout/Cart';

class Closette extends App {
  constructor(props) {
    super(props);

    const client = Client.buildClient({
      domain: "closettedevelopment.myshopify.com",
      storefrontAccessToken: "e4ef2d5a0c741c17791bb1dab8cfbb2b"
    });

    this.state = { 
      client,
      checkout: {
        items: []
      },
      isCartOpen: false
    }
  }

  componentWillMount() {
    this.state.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    // this.client.product.fetchAll().then((res) => {
    //   this.setState({
    //     products: res,
    //   });
    // });

    // this.client.shop.fetchInfo().then((res) => {
    //   this.setState({
    //     shop: res,
    //   });
    // });
  }

  addVariantToCart = (variantId, quantity) => {
    this.setState({
      isCartOpen: true,
    });

    const itemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
    const checkoutId = this.state.checkout.id;

    return this.state.client.checkout.addLineItems(checkoutId, itemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Cart isCartOpen={this.state.isCartOpen} checkout={this.state.checkout} />
        <Component client={this.state.client} addVariantToCart={this.addVariantToCart} {...pageProps} />
      </Layout>
    );
  }
}

export default Closette;