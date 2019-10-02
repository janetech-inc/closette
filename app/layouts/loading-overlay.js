import { useState, useEffect } from "react";
import { useSpring } from "react-spring";
import Loader from "../components/icons/loader";
import {
  StyledLoadingOverlay,
  LoaderWrapper,
  Background
} from "./loading-overlay-styles";

const LoadingOverlay = ({ isLoading }) => {
  const [animateIn, setAnimateIn] = useState(false);
  const [hidden, setHidden] = useState(true);

  const fade = useSpring({
    opacity: animateIn ? "0.6" : "0",
    onRest: () => {
      if (!animateIn && !hidden) {
        setHidden(true);
      }
    }
  });

  useEffect(() => {
    if (isLoading) {
      setHidden(false)
    } else {
      setAnimateIn(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!hidden) {
      setAnimateIn(true);
    }
  }, [hidden]);

  
  if (hidden) return null;
  return (
    <StyledLoadingOverlay style={fade}>
      <Background/>
      <LoaderWrapper>
        <Loader height="88px" width="88px" fill="#FFFFFF"/>
      </LoaderWrapper>
    </StyledLoadingOverlay>
  );
};

export default LoadingOverlay;
