import { gaTrackVideoEvents, VideoEventTypes } from "../../utils/ga_analytics";

const PlayIcon = ({ styles, className, width = "34px", height = "34px" }) => (
  <svg
    className={className}
    width={width}
    height={height}
    style={styles}
    version="1.1"
    viewBox="0 0 34 34"
    xmlns="http://www.w3.org/2000/svg"
    xlinkHref="http://www.w3.org/1999/xlink"
  >
    <title>play button</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <g id="play-button" onClick={(e) => {gaTrackVideoEvents(VideoEventTypes.MainVideo, 'play')}}>
          <circle
            id="Oval"
            fillOpacity="0.3"
            fill="#4A4A4A"
            cx="17"
            cy="17"
            r="17"
          />
          <polygon
            id="Triangle"
            fill="#FFFFFF"
            transform="translate(18.000000, 17.000000) rotate(-270.000000) translate(-18.000000, -17.000000) "
            points="18 12 23 22 13 22"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default PlayIcon;
