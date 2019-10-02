import PropTypes from "prop-types";

const Loader = ({ width, height, fill }) => (
  <svg
    version="1.1"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enableBackground="new 0 0 0 0"
  >
    <circle fill={fill} stroke="none" cx="30" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.1"
      />
    </circle>
    <circle fill={fill} stroke="none" cx="50" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.2"
      />
    </circle>
    <circle fill={fill} stroke="none" cx="70" cy="50" r="6">
      <animate
        attributeName="opacity"
        dur="1s"
        values="0;1;0"
        repeatCount="indefinite"
        begin="0.3"
      />
    </circle>
  </svg>
);

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

Loader.defaultProps = {
  width: "44px",
  height: "44px"
};

export default Loader;
