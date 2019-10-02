import { gaTrackVideoEvents, VideoEventTypes } from "../../utils/ga_analytics";

const PauseIcon = ({ styles, className, width = "34px", height = "34px" }) => (
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
    <title>pause button</title>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <g id="play-button" onClick={(e) => {gaTrackVideoEvents(VideoEventTypes.MainVideo, 'pause')}}>
          <circle
            id="Oval"
            fillOpacity="0.3"
            fill="#4A4A4A"
            cx="17"
            cy="17"
            r="17"
          />
          <rect
            id="Rectangle"
            fill="#FFFFFF"
            x="18"
            y="12"
            width="2"
            height="10"
          />
          <rect
            id="Rectangle-Copy"
            fill="#FFFFFF"
            x="14"
            y="12"
            width="2"
            height="10"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default PauseIcon;
