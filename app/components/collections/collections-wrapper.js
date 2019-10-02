import { useRef, useState, useEffect } from "react";
import { useSpring } from "react-spring";
import { withRouter } from "next/router";
import { StyledCollectionsWrapper } from "./collections-wrapper-styles";
import CollectionSlide from "./collection-slide";

const CollectionsWrapper = ({
  collections,
  children,
  scrollToCollection,
  router
}) => {
  const [scrollPos, setScrollPos] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const slideWrapper = useRef(null);
  const firstRender = useRef(true);

  const scrollLeft = slideWrapper.current ? slideWrapper.current.scrollLeft : 0;

  const scrollAnimation = useSpring({
    x: scrollPos === 0 ? scrollLeft : scrollPos,
    from: { x: scrollLeft },
    immediate: scrollPos === 0,
    onRest: () => {
      if (scrollPos != 0) {
        setScrollPos(0);
      }
    }
  });

  const calcScrollPos = index => {
    const windowWidth = window ? window.innerWidth : 0;
    const childrenWidth = windowWidth / 3;
    const wrapperWidth = children ? windowWidth : 0;
    const scrollToPos = index * childrenWidth + wrapperWidth;

    setScrollPos(scrollToPos);
  };

  useEffect(() => {
    if (scrollToCollection) {
      calcScrollPos(0);
    }
  }, [scrollToCollection]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    calcScrollPos(activeIndex);
  }, [activeIndex]);

  return (
    <StyledCollectionsWrapper
      ref={slideWrapper}
      scrollLeft={scrollAnimation.x}
      className="row"
    >
      {children}
      {collections.map((collection, i) => (
        <CollectionSlide
          key={collection.id}
          {...collection}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          collectionsCount={collections.length}
          router={router}
          index={i}
        />
      ))}
    </StyledCollectionsWrapper>
  );
};

CollectionsWrapper.defaultProps = {};

export default withRouter(CollectionsWrapper);
