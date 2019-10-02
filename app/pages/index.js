import axios from "axios";

import { useState, useRef } from "react";
import Page from "../layouts/page";
import CollectionsWrapper from "../components/collections/collections-wrapper";
import {
  PageWrapper,
  StyledVideoPlayer,
  ShowCollectionsButton
} from "./index-styles";

const FAKE_DATA = {
  video: {
    desktop_src:
      "https://res.cloudinary.com/cxn-fashion/video/upload/c_fill,g_center,h_548,q_auto:best,w_1280/c_fill,g_center,h_548,w_1280/v1559058231/CXN_OPEN_1080.mp4",
    mobile_src:
      "https://res.cloudinary.com/cxn-fashion/video/upload/c_pad,g_center,h_640,w_460/v1559750607/CXN_INTRO_VIDEO_WORDS_qkbihn.mp4",
    poster:
      "https://res.cloudinary.com/cxn-fashion/image/upload/b_rgb:000,c_pad,g_center,h_792,w_1680/v1560798558/01_Cover_1_tssow4.png",
    posterMobile:
      "https://res.cloudinary.com/cxn-fashion/image/upload/b_rgb:000,c_pad,g_center,h_792,w_520/v1560798558/01_Cover_1_tssow4.png",
    posterTablet:
      "https://res.cloudinary.com/cxn-fashion/image/upload/b_rgb:000,c_pad,g_center,h_792,w_920/v1560798558/01_Cover_1_tssow4.png"
  }
};

const Index = props => {
  const [scrollToCollection, setScrollToCollection] = useState(0);
  const videoRef = useRef(null);

  const handleSlide = e => {
    e.stopPropagation();
    videoRef.current.pause();
    setScrollToCollection(scrollToCollection + 1);
  };

  return (
    <Page title="Homepage">
      <PageWrapper>
        <CollectionsWrapper
          collections={props.collections}
          scrollToCollection={scrollToCollection}
        >
          <StyledVideoPlayer
            {...FAKE_DATA.video}
            ref={videoRef}
            onEnded={handleSlide}
            fullScreen
            hideLookNumber
          >
            <ShowCollectionsButton onClick={handleSlide}>
              TAKE ME TO THE SHOW —&gt;
            </ShowCollectionsButton>
          </StyledVideoPlayer>
        </CollectionsWrapper>
      </PageWrapper>
    </Page>
  );
};

Index.getInitialProps = async req => {
  const response = await axios(`${process.env.API_URL}/home`);
  return { ...response.data };
};

export default Index;
