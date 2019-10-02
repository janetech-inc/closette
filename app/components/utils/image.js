import React from "react";
import PropTypes from "prop-types";
import { StyledImage } from "./image.styles";

const Image = ({
  src,
  styles,
  className,
}) => (
  <StyledImage
    className={className}
    src={src}
    style={styles}
  />
);

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  styles: PropTypes.object,
};

Image.defaultProps = {
  src: "",
  className: "",
  styles: {},
};

export default Image;
