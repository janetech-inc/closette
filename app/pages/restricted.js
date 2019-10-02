import Page from "../layouts/page";
import { AnimationWrapper, StyledVideoPlayer } from "./restricted-styles";

const FAKE_DATA = {
  video: {
    desktop_src: "https://res.cloudinary.com/cxn-fashion/video/upload/c_crop,g_center,h_817,w_1408/v1560806751/cxn-intro_wcbz0h.mp4",
    mobile_src: "https://res.cloudinary.com/cxn-fashion/video/upload/c_pad,g_center,h_640,w_460/v1560806751/cxn-intro_wcbz0h.mp4",
    poster: "https://res.cloudinary.com/cxn-fashion/image/upload/b_rgb:000,c_pad,g_center,h_792,w_1680/v1560798558/01_Cover_1_tssow4.png",
    posterMobile: "https://res.cloudinary.com/cxn-fashion/image/upload/b_rgb:000,c_pad,g_center,h_792,w_520/v1560798558/01_Cover_1_tssow4.png",
    posterTablet: "https://res.cloudinary.com/cxn-fashion/image/upload/b_rgb:000,c_pad,g_center,h_792,w_920/v1560798558/01_Cover_1_tssow4.png"
  }
};

class Restricted extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  // --- React Lifecycle ---

  componentDidMount() {
    //
  }

  render() {
    return (
      <Page title="theCXN">
        <AnimationWrapper>
          <StyledVideoPlayer
            {...FAKE_DATA.video}
            ref={this.videoRef}
            userAgent={this.props.userAgent}
            autoPlay
            fullScreen
            hideLookNumber
          />
        </AnimationWrapper>
      </Page>
    );
  }

  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

    return {
      showLogo: false,
      showRack: false,
      userAgent: userAgent
    };
  }

  static defaultProps() {}
}

export default Restricted;
