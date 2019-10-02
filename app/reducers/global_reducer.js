export const globalTypes = {
  addToRack: "ADD_TO_RACK",
  deleteFromRack: "DELETE_FROM_RACK",
  updateCheckoutProduct: "UPDATE_CHECKOUT_PRODUCT",
};

const filterCart = (cart, payload) => cart.filter(cartProduct => !payload.find(product => product.id === cartProduct.id));

export const globalReducer = (state, action) => {
  let filteredCart;
  let newCart;
  switch (action.type) {
    case globalTypes.addToRack:
      filteredCart = filterCart(state.cart, action.payload)
      
      newCart = [...filteredCart, ...action.payload];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
    case globalTypes.deleteFromRack:
      filteredCart = filterCart(state.cart, [{id: action.payload}])
      newCart = [...filteredCart];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
    case globalTypes.updateCheckoutProduct:
      const {imageUrl, productId, amount, size, price, collectionName, vendorProductId, deliveryWindowEnd} = action.payload;
      const whole_sale_price = Number(price);
      const changedPrice = amount > -1 ? whole_sale_price : -whole_sale_price;
      
      let updatedCheckoutProduct;
      if (state.checkoutProducts[productId]) {
        const product_total_sizes = Object.values(state.checkoutProducts[productId].sizes).reduce((sum, value) => sum + value, 0) + amount;
        if (product_total_sizes === 0) {
          updatedCheckoutProduct = null;
        } else {
          updatedCheckoutProduct = {
            ...state.checkoutProducts[productId],
            product_price_sum: product_total_sizes * whole_sale_price,
            sizes: {
              ...state.checkoutProducts[productId].sizes,
              [size]: (state.checkoutProducts[productId].sizes[size] || 0) + amount
            }
          }
        }
      } else {
        updatedCheckoutProduct = {
          whole_sale_price,
          image_url: imageUrl,
          product_id: productId,
          vendor_product_id: vendorProductId,
          collection_name: collectionName,
          product_price_sum: changedPrice,
          delivery_window_end: deliveryWindowEnd,
          sizes: {
            [size]: amount
          }
        }
      }
      return {
        ...state,
        checkoutProducts: {
          ...state.checkoutProducts,
          [productId]: updatedCheckoutProduct
        },
        cartTotals: {
          ...state.cartTotals,
          orderSubtotal: state.cartTotals.orderSubtotal + changedPrice
        }
      };
    default:
      return state;
  }
};
