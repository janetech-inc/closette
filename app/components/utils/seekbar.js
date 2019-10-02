import React, { useState, useMemo } from "react";
import { useSpring } from "react-spring";
import { onSetFullscreen } from "../../utils/helper_functions";
import CuePoint from "./cue-point";
import { gaTrackVideoEvents, VideoEventTypes } from "../../utils/ga_analytics";

import {
  StyledPlayIcon,
  StyledPauseIcon,
  PlayControlsWrapper,
  FullscreenControlsWrapper,
  SeekBarInnerWrapper,
  ProgressBar,
  StyledSeekBar,
  SeekBarInput,
  StyledFullscreen,
} from "./seekbar-styles";

const SeekBar = React.forwardRef(
  (
    {
      onTogglePlay,
      updateVideoPos,
      isPlaying,
      seekBarValue,
      cuePoints,
      activeCuePoint,
      videoPlayerRef,
    },
    ref
  ) => {
    const [hover, setHover] = useState(false);
    const videoDuration = videoPlayerRef.current && videoPlayerRef.current.duration;

    const progressStyle = useSpring({
      width: `${seekBarValue}%`,
      from: { width: "0%" }
    });

    const returnCuePoints = useMemo(() => {
      if (!cuePoints) return;
      return cuePoints.map((cuePoint, i) => (
        <CuePoint
          key={cuePoint.time}
          {...cuePoint}
          hover={hover}
          videoDuration={videoDuration}
          updateVideoPos={updateVideoPos}
          activeCuePoint={activeCuePoint}
          index={i}
        />
      ));
    }, [activeCuePoint.index, hover, videoDuration]);

    return (
      <StyledSeekBar isPlaying={isPlaying}>
        <PlayControlsWrapper onClick={onTogglePlay}>
          <StyledPlayIcon isPlaying={isPlaying} />
          <StyledPauseIcon isPlaying={isPlaying} />
        </PlayControlsWrapper>
        <SeekBarInnerWrapper>
          <SeekBarInput
            ref={ref}
            value={seekBarValue}
            type="range"
            step="1"
            onChange={updateVideoPos}
            onInput={updateVideoPos}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
          <ProgressBar style={progressStyle} />
          {returnCuePoints}
        </SeekBarInnerWrapper>
        <FullscreenControlsWrapper onClick={() => {gaTrackVideoEvents(VideoEventTypes.MainVideo, 'Full Screen'); onSetFullscreen(videoPlayerRef)}}>
          <StyledFullscreen />
        </FullscreenControlsWrapper>
      </StyledSeekBar>
    );
  }
);

export default SeekBar;
