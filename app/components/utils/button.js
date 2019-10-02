import React from "react";
import PropTypes from "prop-types";
import { StyledButton, ButtonCta } from "./button-styles";
import Loader from "../icons/loader";

export const BUTTON_TYPES = {
  styleOne: 1,
  styleTwo: 2,
};

const Button = ({
  onClick,
  type,
  styles,
  buttonStyle,
  className,
  isSubmitting,
  isInactive,
  cta
}) => (
  <StyledButton
    className={className}
    isSubmitting={isSubmitting}
    isInactive={isInactive}
    buttonStyle={buttonStyle}
    style={styles}
    type={type}
    onClick={isSubmitting || isInactive ? undefined : onClick}
    onMouseDown={e => e.preventDefault()}
  >
    {isSubmitting && <Loader />}
    <ButtonCta>{cta}</ButtonCta>
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  styles: PropTypes.object,
  buttonStyle: PropTypes.number,
  isSubmitting: PropTypes.bool,
  isInactive: PropTypes.bool,
  cta: PropTypes.string
};

Button.defaultProps = {
  className: "",
  onClick: () => undefined,
  type: "button",
  styles: {},
  buttonStyle: 0,
  isSubmitting: false,
  isInactive: false,
  cta: "Submit"
};

export default Button;
