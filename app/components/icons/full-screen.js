import { animated } from "react-spring";

const FullScreen = ({ styles, className, width = "20px", height = "20px" }) => (
  <animated.svg
    style={styles}
    width={width}
    height={height}
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-4 7h-1v-3.241l-11.241 11.241h3.241v1h-5v-5h1v3.241l11.241-11.241h-3.241v-1h5v5z" />
  </animated.svg>
);

export default FullScreen;
