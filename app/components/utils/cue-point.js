import { useState, useEffect, useMemo } from "react";
import { ImageThumbnail, CuePointWrapper, CueText, CuePointMarker } from "./cue-point-styles";
import { convertTimeToPercentage } from "../../utils/helper_functions";
import { gaTrackVideoEvents, VideoEventTypes} from "../../utils/ga_analytics";

const CuePoint = ({
  time,
  thumbnail,
  hover,
  updateVideoPos,
  activeCuePoint,
  index,
  title,
  videoDuration,
}) => {
  const [showExpanded, setShowExpanded] = useState(false);
  const [active, setActive] = useState(false);

  const formattedTime = useMemo(() => convertTimeToPercentage(time, videoDuration), [time, videoDuration]);

  useEffect(() => {
    if (activeCuePoint.index === -1) return;
    if (activeCuePoint.index >= index) {
      setShowExpanded(activeCuePoint.index === index);
      setActive(true);
      setTimeout(() => {
        setShowExpanded(false);
      }, 2000);
    } else {
      setShowExpanded(false);
      setActive(false);
    }
  }, [activeCuePoint]);

  return (
    <CuePointWrapper left={formattedTime}>
      <CueText>
        {title}
      </CueText>
      <CuePointMarker showRedBorder={active} hover={hover}>
        <ImageThumbnail
          thumbnail={thumbnail}
          expanded={showExpanded}
          showRedBorder={active}
          onClick={(e) => {gaTrackVideoEvents(VideoEventTypes.LookSequence, title); updateVideoPos(null, formattedTime + 0.1)}}
        >
        </ImageThumbnail>
      </CuePointMarker>
    </CuePointWrapper>

  );
};

export default CuePoint;
