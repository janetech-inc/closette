import "./ProgressBar.scss";

const ProgressBar = props => (
  <div className="container">
    <div className="filler" style={{ width: `${props.percentage}%` }}></div>
  </div>
);

export default ProgressBar;