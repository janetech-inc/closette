import { useState } from "react";
import { useSpring } from "react-spring";
import { isMobile } from "../../utils/helper_functions";
import {
  StyledCollectionSlide,
  CollectionImageWrapper,
  CollectionImage,
  DesignerNameWrapper,
  DesignerName
} from "./collection-slide-styles";

const CollectionSlide = ({
  media,
  designer,
  season,
  id,
  themeBlack,
  setActiveIndex,
  router,
  collectionsCount,
  index,
  activeIndex
}) => {
  const [hover, setHover] = useState(false);
  const active = activeIndex === index;
  const mobile = isMobile();
  const singleSlide = collectionsCount === 1;

  const mobileAnimation = active ? "100vh" : "33.33333333vh";
  const desktopAnimation = active && !singleSlide? "100vw" : `${collectionsCount <= 3 && !singleSlide ? 100 / collectionsCount : 33.33333333}vw`;
  const openSlideAnimation = useSpring({
    width: mobile ? "100%" : desktopAnimation,
    height: mobile ? mobileAnimation : "100vh",
    immediate: singleSlide,
    onRest: () => {
      if (active) {
        setTimeout(() => {
          router.push({pathname: `/collections/${id}`});
        }, (singleSlide ? 0 : 500));
      }
    }
  });

  const fadeOut = useSpring({
    opacity: active || hover ? 0 : 1
  });
  
  return (
    <StyledCollectionSlide
      style={openSlideAnimation}
      onClick={() => setActiveIndex(index)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      singleSlide={singleSlide}
    >
      <CollectionImageWrapper>
        <CollectionImage
          style={{
            backgroundImage: `url(${media.primary_image.red})`,
            ...fadeOut
          }}
        />
        <CollectionImage
          style={{
            backgroundImage: `url(${media.primary_image.default})`,
          }}
          mainImage
        />
      </CollectionImageWrapper>
      <DesignerNameWrapper singleSlide={singleSlide}>
        <DesignerName themeBlack={themeBlack}>{designer.name}</DesignerName>
        <DesignerName themeBlack={themeBlack}>{season}</DesignerName>
      </DesignerNameWrapper>
    </StyledCollectionSlide>
  );
};

// CollectionSlide.propTypes = {
//   url:    PropTypes.string,
//   name:   PropTypes.string
// }

CollectionSlide.defaultProps = {
  media: {
    primary_image: {},
    video: {}
  },
  designer: "",
  id: "",
  name: ""
};

export default CollectionSlide;
