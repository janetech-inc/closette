import React from "react";
import PropTypes from "prop-types";
import { StyledCaretIcon } from "./caret-styles";

const CaretIcon = ({
  fill,
  height,
  width,
  direction,
  open,
  className,
  styles
}) => (
  <StyledCaretIcon
    className={className}
    style={styles}
    width={width}
    height={height}
    direction={direction}
    open={open}
    viewBox="0 0 100 62.05"
  >
    <title>Caret Svg</title>
    <polygon
      points="100 12.08 87.92 0 49.97 37.95 12.01 0 0 12.01 50.04 62.05 100 12.08"
      fill={fill}
    />
  </StyledCaretIcon>
);

CaretIcon.propTypes = {
  styles: PropTypes.object,
  height: PropTypes.string,
  width: PropTypes.string,
  direction: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
  open: PropTypes.bool
};

CaretIcon.defaultProps = {
  styles: {},
  height: "16px",
  width: "16px",
  direction: "down",
  fill: "#000000",
  className: "",
  open: false
};

export default CaretIcon;
