import { useSpring } from "react-spring";
import { useRef } from "react";

import { gaTrackLookEvents, LookEventsTypes } from "../../utils/ga_analytics";

const returnContent = (isVideo, url, fullScreenRef) => {
  let content;
  if (isVideo) {
    content = <VideoCell ref={fullScreenRef} src={url} autoPlay muted loop>
                <source src={url} type="video/mp4" />
              </VideoCell>
  } else {
    content = <StyledLookCell ref={fullScreenRef} image={url}/>
  }
  return content;
};

import {
  LookCellOverlay,
  PlusIcon,
  StyledLookCellWrapper,
  StyledLookCell,
  VideoCell
} from "./look-cell-styles";

const LookCell = ({
  index,
  cell,
  isVideo,
  activeImageId,
  handleActiveImage,
  looksPerRow,
  lookId
}) => {

  const fullScreenRef = useRef(null);

  // const onFullScreenClick = (e) => {
  //   e.stopPropagation();
  //   onSetFullscreen(fullScreenRef);
  // };

  // --- Look Cell Sizing
  const ratio = (100/looksPerRow);
  const heightRatio = (100 - ratio);


  // --- Active Look Effects ---

  const sameRow = Math.floor(activeImageId/looksPerRow) == Math.floor(index/looksPerRow)   ;
  const isActive = activeImageId === index;
  const anyActive = activeImageId !== -1;

  const sameRowStyles = {
    width: isActive ? "100%" : anyActive ? "0%" : `${ratio}%`,
    height: isActive ? "100%" : `${heightRatio}%`
  };

  const differentRowStyles = {
    width: isActive ? "100%" : `${ratio}%`,
    height: isActive ? "100%" : anyActive ? "0%" : `${heightRatio}%`
  };

  const fullScreenAnimation = useSpring(
    sameRow ?
      sameRowStyles :
      differentRowStyles
  );


  // ---
  const content = returnContent(isVideo, cell, fullScreenRef);

  return (
    <StyledLookCellWrapper
      style={fullScreenAnimation}
      onClick={(e) => {gaTrackLookEvents(LookEventsTypes.LookGridProduct, cell); handleActiveImage(isActive ? -1 : index, lookId)}}
      ratio = {ratio}
      heightratio = {heightRatio}
    >

      {content}
      <LookCellOverlay right>
        <PlusIcon isActive={isActive} />
      </LookCellOverlay>
      { // turning the full screen button off for now
        // <LookCellOverlay>
        //   <StyledFullScreenWrapper onClick={onFullScreenClick}>
        //     <FullScreen width={30} height={30}/>
        //   </StyledFullScreenWrapper>
        // </LookCellOverlay>
      }
    </StyledLookCellWrapper>
  );
};

LookCell.propTypes = {};

LookCell.defaultProps = {};

export default LookCell;
