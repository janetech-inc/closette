import { useState, useEffect, useRef } from "react";
import { useSpring } from "react-spring";

import Error from "next/error";
import Page from "../layouts/page";
import VideoPlayer from "../components/utils/video-player";
import Modal from "../components/utils/modal";
import { handleCatalogCall } from "../utils/helper_auth";
import {
  OpeningBackground,
  DesignerNameWrapper,
  DesignerName,
  VideoPlayerWrapper
} from "./collection-styles";

const Collection = ({ designer, season, media, errorCode, per_row: perRow, looks }) => {
  const [modal, setModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [play, setPlay] = useState(false);

  const videoRef = useRef(null);
  const backgroundRef = useRef(null);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const fadeOutAnimation = useSpring({
    opacity: imageLoaded ? 0 : 1,
    onRest: () => {
      if (imageLoaded && backgroundRef.current) {
        backgroundRef.current.style.display = "none";
        setPlay(true);
      }
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 500);
  }, []);

  return (
    <Page title={`${designer.name} — ${season}`}>
      <OpeningBackground
        image={media.primary_image.default}
        style={fadeOutAnimation}
        ref={backgroundRef}
      >
        <DesignerNameWrapper>
          <DesignerName>{designer.name}</DesignerName>
          <DesignerName>{season}</DesignerName>
        </DesignerNameWrapper>
      </OpeningBackground>
      <VideoPlayerWrapper>
        <VideoPlayer
          {...media.video}
          style={{ float: "left" }}
          ref={videoRef}
          fullScreenButton
          fullScreen
          autoPlay={play}
          looks={looks}
          loop
          looksPerRow={perRow}
          collectionName={designer.name+season}
        />
      </VideoPlayerWrapper>
      <Modal onClose={() => setModal(false)} active={modal}>
        <span>HI I AM THE MODAL</span>
      </Modal>
    </Page>
  );
};

Collection.getInitialProps = async ctx => {
  try {
    const response = await handleCatalogCall(ctx, `${process.env.API_URL_CATALOG}/collections/${ctx.query.id}`);

    if(response && response.data && response.data.designer) {
      return { ...{title:`${response.data.designer.name}${response.data.season}`}, ...response.data };
    }
    else if (response && response.data){
      return { ...response.data};
    }
  } catch (error) {
    console.error(error)
  }
};

Collection.defaultProps = {
  collection: {
    id: null,
    media: {
      primary_image: {},
      video: {}
    },
    designer: {
      name: ""
    }
  }
};

export default Collection
