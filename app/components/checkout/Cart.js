import React from "react";

import "./Cart.scss";
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cartItems = (this.props.checkout && this.props.checkout.lineItems) && this.props.checkout.lineItems.map(item => (
      <CartItem key={item.id} item={item} />
    ));

    return (
      <div className={this.props.isCartOpen ? 'cart cart-open' : 'cart cart-hidden'}>
        <h3>Cart Items</h3>
        {cartItems}
      </div>
    )
  }
}

export default Cart;