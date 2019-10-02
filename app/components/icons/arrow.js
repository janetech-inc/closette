import React from "react";
import PropTypes from "prop-types";
import { StyledArrowIcon } from "./arrow-styles";

const ArrowIcon = ({ styles, className, width = "34px", height = "34px", direction, fill = "#000" }) => {
  return (
    <StyledArrowIcon
      className={className}
      width={width}
      height={height}
      style={styles}
      direction={direction}
      version="1.1"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
      fill={fill}
    >
      <title>arrow icon</title>
      <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/>
    </StyledArrowIcon>
  )
};

ArrowIcon.propTypes = {
  styles: PropTypes.object,
  height: PropTypes.string,
  width: PropTypes.string,
  direction: PropTypes.string,
  className: PropTypes.string,
};

ArrowIcon.defaultProps = {
  styles: {},
  height: "16px",
  width: "16px",
  direction: "down",
  className: "",
};

export default ArrowIcon;
