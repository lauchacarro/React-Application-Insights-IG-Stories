import { useState } from "react";
import { WithHeader, WithSeeMore } from "react-insta-stories";
import { Action, Renderer, Story } from "react-insta-stories/dist/interfaces";
import { RendererProps } from "../../utils/RendererProps";
import Spinner from "../../utils/Spinner";

interface ImageRendererProps extends RendererProps {}



const ImageRenderer: React.FC<ImageRendererProps> = ({
  action,
  story,
  config,
}) => {
  const [loaded, setLoaded] = useState(false);

  const { width, height, loader, storyStyles } = config;

  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  const imageLoaded = () => {
    setLoaded(true);
    action("play");
  };

  return (
    <div>
      <img style={computedStyles} src={story.url} onLoad={imageLoaded} />
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
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
};

export default ImageRenderer;
