import { useState, useRef, useEffect } from "react";

import { RendererProps } from "../../utils/RendererProps";
import Spinner from "../../utils/Spinner";

interface VideoRendererProps extends RendererProps {}

const VideoRenderer: React.FC<VideoRendererProps> = ({
  action,
  messageHandler,
  story,
  isPaused,
  config,
}) => {
  let vid = useRef<HTMLVideoElement>(null);

  const [loaded, setLoaded] = useState(false);

  const [muted, setMuted] = useState(false);
  const { width, height, loader, storyStyles } = config;

  useEffect(() => {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        console.log("play");
        vid.current.play().catch(() => {});
      }
    }
  }, [isPaused]);

  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  const onWaiting = () => {
    action("pause", true);
  };

  const onPlaying = () => {
    action("play", true);
  };

  const videoLoaded = () => {
    messageHandler("UPDATE_VIDEO_DURATION", {
      duration: vid.current!.duration,
    });
    setLoaded(true);
    vid
      .current!.play()
      .then(() => {
        action("play");
      })
      .catch(() => {
        setMuted(true);
        vid.current!.play().finally(() => {
          action("play");
        });
      });
  };

  return (
    <div style={styles.videoContainer}>
      <video
        ref={vid}
        style={computedStyles}
        src={story.url}
        controls={false}
        onLoadedData={videoLoaded}
        playsInline
        onWaiting={onWaiting}
        onPlaying={onPlaying}
        muted={muted}
        autoPlay
        webkit-playsinline="true"
      />
      {!loaded && (
        <div
          style={{
            width: width,
            height: height,
            position: "absolute",
            left: 0,
            top: 0,
            background: "rgba(0, 0, 0, 0.9)",
            zIndex: 9,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ccc",
          }}
        >
          {loader || <Spinner />}
        </div>
      )}
    </div>
  );
};
const styles = {
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  videoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default VideoRenderer;
