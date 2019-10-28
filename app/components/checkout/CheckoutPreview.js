import React, { Fragment } from 'react'

const CheckoutPreview = ({ checkout }) => {
  const checkoutItems = checkout.lineItems && checkout.lineItems.map((item) => {
    return (
      <Fragment key={item.id.toString()}>
        <p>{item.title}, {item.variant.title}</p>
        <p>{item.variant.price}</p>
        <p>{item.quantity}</p>
      </Fragment>
    );
  });

  return (
    <div>
      {checkoutItems}
    </div>
  )
}

export default CheckoutPreview
