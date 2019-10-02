import React from "react";
import PropTypes from "prop-types";
import { StyledCloseIcon } from "./close-styles";

const CloseIcon = ({ styles, className, width, height, ...other }) => {
  return (
    <StyledCloseIcon
      className={className}
      moveLeft={height}
      style={{
        width: 0,
        paddingLeft: height,
        paddingRight: height,
        height: height,
        ...styles
      }}
      {...other}
    />
  )
};

CloseIcon.propTypes = {
  styles: PropTypes.object,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};

CloseIcon.defaultProps = {
  styles: {},
  height: "16px",
  width: "16px",
  className: "",
};

export default CloseIcon;