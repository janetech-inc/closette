import React from "react";
import PropTypes from "prop-types";
import { StyledProductQuantity, QuantityButton } from "./product-quantity.styles";
import { gaTrackRackEvents, RackEventsTypes } from "../../utils/ga_analytics";

const ProductQuantity = ({
  className,
  size,
  children,
  quantityChange,
  itemId
}) => (
  <StyledProductQuantity
    className={className}
    >
    <QuantityButton left onClick={() => {quantityChange(size); gaTrackRackEvents(RackEventsTypes.RackDecreaseQuantity, `product_id: ${itemId}`)}}>-</QuantityButton>
    {children}
    <QuantityButton onClick={() => {quantityChange(size, true); gaTrackRackEvents(RackEventsTypes.RackIncreaseQuantity, `product_id: ${itemId}`)}}>+</QuantityButton>
  </StyledProductQuantity>
);

ProductQuantity.propTypes = {
  className: PropTypes.string,
};

ProductQuantity.defaultProps = {
  className: "",
};

export default ProductQuantity;
