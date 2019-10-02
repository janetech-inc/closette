import React, { useRef, useState, useEffect, useMemo } from "react";
import { useSpring } from "react-spring";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";
import Loader from "../icons/loader";
import LooksGrid from "../collections/looks-grid";
import SeekBar from "./seekbar";
import MobileDetect from "mobile-detect"
import { isMobile, convertTimeToPercentage } from "../../utils/helper_functions";
import {
  LooksWrapper,
  ChapterCopy,
  ChapterNumber,
  VideoControls,
  StyledPlayIcon,
  StyledPauseIcon,
  VideoWrapper,
  LargeControlsWrapper,
  VideoOverlay,
  Video,
  StyledVideoPlayer,
  CuePointCopyOverlay,
  SmallCopy,
  LargeCopy
} from "./video-player-styles";

const VideoPlayer = React.forwardRef(
  (
    {
      className,
      poster,
      posterMobile,
      posterTablet,
      userAgent,
      cue_points: cuePoints,
      desktop_src: desktopSrc,
      mobile_src: mobileSrc,
      looks,
      autoPlay,
      loop,
      children,
      style,
      fullScreen,
      fullScreenButton,
      hideLookNumber,
      looksPerRow,
      collectionName,
      ...other
    },
    ref
  ) => {
    const [seekBarValue, setSeekBarValue] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [activeCuePoint, setActiveCuePoint] = useState({
      index: -1,
      time: 0
    });
    const [loading, setLoading] = useState(false);
    const [sharedScreen, setSharedScreen] = useState(false);
    const [lookTransition, setLookTransition] = useState(null);
    const [showCueOverlay, setShowCueOverlay] = useState(false);
    const [userTriggered, setUserTriggered] = useState(false);

    const videoPlayerRef = ref;
    const seekBar = useRef(null);
    const firstLoad = useRef(true);
    const mobile = isMobile();

    const updateVideoPos = (e, newTime) => {
      if (!videoPlayerRef.current) return;

      setUserTriggered(true);

      let percentage = e ? e.target.value : newTime;
      // Calculate the video time
      const time = videoPlayerRef.current.duration * (percentage / 100);

      // update seekbar state
      setSeekBarValue(percentage);

      // Update the video time
      videoPlayerRef.current.currentTime = time;
    };

    const videoTimeUpdate = () => {


      // Calculate the seekbar value
      const time =
        (100 / videoPlayerRef.current.duration) *
        videoPlayerRef.current.currentTime;

      // return if time is NaN
      if (Number(time) != time) return;

      // update seekbar state
      setSeekBarValue(time);
    };

    const fadeOut = useSpring({ opacity: loading ? 0 : 1 });

    const videoSize = useSpring({
      width: mobile ? "100%" : sharedScreen ? "60%" : "100%",
      height: mobile ? (sharedScreen ? "50%" : "100%") : "100%"
    });

    const fadeTransition = useSpring({
      opacity: lookTransition ? 0 : 1,
      onRest: () => {
        if (lookTransition) {
          setActiveCuePoint(lookTransition);
          setLookTransition(null);
          if(!userTriggered) {
            setShowCueOverlay(true);
          }
          setUserTriggered(false);
        }
      }
    });

    const cueOverlayTransition = useSpring({
      opacity: showCueOverlay ? 1 : 0,
      onRest: () => {
        if (showCueOverlay) {
          setTimeout(() => {
            setShowCueOverlay(false);
          }, 1000);

        }
      }

    });

    useEffect(() => {
      if (firstLoad.current) {
        firstLoad.current = false;
        return;
      }
      setLoading(true);
    }, [desktopSrc, mobileSrc]);

    useEffect(() => {
      const videoDuration = videoPlayerRef.current.duration;
      if (!cuePoints || !videoDuration) return;
      // we can prob optimize this by throttling this, currently seekBarValue is updated quite frequently
      for (let [index, cuePoint] of cuePoints.entries()) {
        const nextCuePoint = cuePoints[index + 1];
        const nextCuePointPercentage = nextCuePoint && nextCuePoint.time && convertTimeToPercentage(nextCuePoint.time, videoDuration);
        const cuePointPercentage = convertTimeToPercentage(cuePoint.time, videoDuration);
        if (seekBarValue >= cuePointPercentage && (nextCuePointPercentage ? seekBarValue < nextCuePointPercentage : true) && index !== activeCuePoint.index) {
          setSharedScreen(true);
          setLookTransition({ index: index, time: cuePointPercentage });
          break;
        }
      }
    }, [seekBarValue]);

    useEffect(() => {
      const videoRef = videoPlayerRef.current;
      if (
        autoPlay &&
        videoRef &&
        videoRef.paused &&
        videoRef.readyState === 4
      ) {
        play();
        setIsPlaying(true);
      }
    }, [autoPlay]);

    const onTogglePlay = () => {
      if (videoPlayerRef.current.paused) {
        play();
      } else {
        pause();
      }
    };

    const play = () => {
      let promise = videoPlayerRef.current.play();

      if (promise !== undefined) {
        promise
          .catch(error => {
            setIsPlaying(false);
          })
          .then(() => {
            setIsPlaying(true);
          });
      }
    };

    const pause = () => {
      videoPlayerRef.current.pause();
      setIsPlaying(false);
    };

    const jumpToCuePoint = swipeToIndex => {
      if (!cuePoints) return;
      const nextIndex = (activeCuePoint.index || 0) + swipeToIndex;
      if (nextIndex >= cuePoints.length) return;
      const newIndex = nextIndex > 0 ? nextIndex : 0;

      updateVideoPos(null, cuePoints[newIndex].time);
    };

    const onSwipe = useSwipeable({
      onSwipedRight: () => jumpToCuePoint(-1),
      onSwipedLeft: () => jumpToCuePoint(1)
    });

    const returnLooksGrid = useMemo(() => {
      if (!cuePoints || activeCuePoint.index < 0) return null;

      const cuePointLooks = cuePoints[activeCuePoint.index].look_ids.map((lookId) => {
        return looks.find((look) => look.id === lookId);
      });
      
      return (
        <LooksWrapper key={activeCuePoint.index} style={fadeTransition}>
          <LooksGrid
            cueData={cuePoints[activeCuePoint.index]}
            cuePointLooks={cuePointLooks}
            play={play}
            pause={pause}
            isPlaying={isPlaying}
            looksPerRow={looksPerRow}
            collectionName={collectionName}
          />
        </LooksWrapper>
      );
    }, [activeCuePoint.index]);

     const md = new MobileDetect(userAgent);
    let posterImg = poster;
    if  (md.phone() && posterMobile !="") { posterImg = posterMobile }
    if  (md.tablet() && posterTablet != "") { posterImg = posterTablet }

    const returnVideo = useMemo(
      () => (
        <Video
          fullScreen={fullScreen}
          style={{ ...style, ...fadeOut }}
          src={desktopSrc}
          poster={posterImg}
          ref={videoPlayerRef}
          autoPlay={autoPlay}
          onClick={onTogglePlay}
          {...other}
          loop={loop}
          onTimeUpdate={videoTimeUpdate}
          onLoadedData={() => loading && setLoading(false)}
        >
          <source
            src={mobileSrc}
            type="video/mp4"
            media="all and (max-width: 480px)"
          />
          <source src={desktopSrc} type="video/mp4" />
        </Video>
      ),
      []
    );

    return (
      <StyledVideoPlayer
        {...onSwipe}
        isPlaying={isPlaying}
        activeCuePoint={activeCuePoint.index !== -1}
        className={className}
      >
        {loading && <Loader />}
        <VideoWrapper style={videoSize}>
          {returnVideo}

          {cuePoints[activeCuePoint.index] &&
          <ChapterNumber
            activeCuePoint={activeCuePoint.index !== -1}
            hideLookNumber={hideLookNumber}>

            Chapter {activeCuePoint.index + 1} -

            <ChapterCopy>
              {cuePoints[activeCuePoint.index].title}
            </ChapterCopy>
          </ChapterNumber>
          }

          { cuePoints[activeCuePoint.index] &&
          <CuePointCopyOverlay style={cueOverlayTransition}>
            <SmallCopy top={"20%"}> Chapter 0{activeCuePoint.index + 1}.</SmallCopy>
            <LargeCopy top={"25%"}>{cuePoints[activeCuePoint.index].title}</LargeCopy>
            <SmallCopy top={"30%"}> {cuePoints[activeCuePoint.index].look_ids.length} Looks </SmallCopy>
          </CuePointCopyOverlay>
          }

          <VideoControls>
            <SeekBar
              ref={seekBar}
              videoPlayerRef={videoPlayerRef}
              onTogglePlay={onTogglePlay}
              updateVideoPos={updateVideoPos}
              isPlaying={isPlaying}
              seekBarValue={seekBarValue}
              cuePoints={cuePoints}
              activeCuePoint={activeCuePoint}
            />
          </VideoControls>
          <VideoOverlay paused={!isPlaying}>
            <LargeControlsWrapper isPlaying={isPlaying} onClick={onTogglePlay}>
              <StyledPlayIcon
                width="260px"
                height="260px"
                isPlaying={isPlaying}
              />
              <StyledPauseIcon
                width="260px"
                height="260px"
                isPlaying={isPlaying}
              />
            </LargeControlsWrapper>
          </VideoOverlay>
        </VideoWrapper>

        {returnLooksGrid}

        {children}
      </StyledVideoPlayer>
    );
  }
);

VideoPlayer.propTypes = {
  className: PropTypes.string,
  hideLookNumber: PropTypes.bool,
  poster: PropTypes.string,
  posterMobile: PropTypes.string,
  posterTablet: PropTypes.string,
  userAgent: PropTypes.string,
  cue_points: PropTypes.arrayOf(PropTypes.object),
  desktopSrc: PropTypes.string,
  mobileSrc: PropTypes.string,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  children: PropTypes.object,
  style: PropTypes.object,
  fullScreen: PropTypes.bool,
  fullScreenButton: PropTypes.bool
};

VideoPlayer.defaultProps = {
  className: "",
  hideLookNumber: false,
  poster: "",
  posterMobile: "",
  posterTablet: "",
  userAgent: '',
  cue_points: [],
  desktopSrc: "",
  mobileSrc: "",
  autoPlay: false,
  loop: false,
  children: undefined,
  style: {},
  fullScreen: false,
  fullScreenButton: false
};

export default VideoPlayer;
