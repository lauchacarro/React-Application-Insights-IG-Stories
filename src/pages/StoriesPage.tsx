import TrackImageRenderer from "../components/stories/TrackImageRenderer";
import TrackVideoRenderer from "../components/stories/TrackVideoRenderer";
import { Renderer, Story } from "react-insta-stories/dist/interfaces";
import Stories from "react-insta-stories";
import { useAppInsightsContext } from "../tracking/AppInsightsContext";
import useTrackPageView from "../tracking/hooks/useTrackPageView";
import { useEffect, useState } from "react";

const Story1: Renderer = (props) => {
  props.story.url = "/img/stories/bitcoin (1).png";

  return (
    <TrackImageRenderer name="Bitcoin Piernas" renderer={props} tag="bitcoin" />
  );
};

const Story2: Renderer = (props) => {
  props.story.url = "/img/stories/playa (1).png";

  return (
    <TrackImageRenderer name="Playa Cabañas" renderer={props} tag="playa" />
  );
};

const Story3: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (1).png";

  return <TrackImageRenderer name="IPhone 14" renderer={props} tag="iphone" />;
};

const Story4: Renderer = (props) => {
  props.story.url = "/videos/bitcoinvideo.mp4";
  props.story.type = "video";
  return (
    <TrackVideoRenderer name="Bitcoin Video" renderer={props} tag="bitcoin" />
  );
};

const Story5: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (2).png";

  return <TrackImageRenderer name="2 IPhones" renderer={props} tag="iphone" />;
};

const Story6: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (3).png";

  return (
    <TrackImageRenderer name="IPhone Prendido" renderer={props} tag="iphone" />
  );
};

const Story7: Renderer = (props) => {
  props.story.url = "/videos/playavideo.mp4";
  props.story.type = "video";
  return <TrackVideoRenderer name="Playa Video" renderer={props} tag="playa" />;
};

const Story8: Renderer = (props) => {
  props.story.url = "/img/stories/bitcoin (3).png";
  return (
    <TrackImageRenderer name="Bitcoin Moneda" renderer={props} tag="bitcoin" />
  );
};

const Story9: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (4).png";
  return (
    <TrackImageRenderer name="IPhone Plantas" renderer={props} tag="iphone" />
  );
};
const Story10: Renderer = (props) => {
  props.story.url = "/img/stories/playa (3).png";
  return (
    <TrackImageRenderer name="Playa Paisaje" renderer={props} tag="playa" />
  );
};

const stories2: Story[] = [
  {
    content: Story1,
  },
  {
    content: Story2,
  },
  {
    content: Story3,
  },
  {
    content: Story4,
  },
  {
    content: Story5,
  },
  {
    content: Story6,
  },
  {
    content: Story7,
  },
  {
    content: Story8,
  },

  {
    content: Story9,
  },
  {
    content: Story10,
  },
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={contentStyle}>
          <h1>No hay más Stories para mostrar.</h1>

          <p>Ahora dirigete al Portal de Azure para ver los resultado.</p>

          <pre>
            <code style={code}>Esta Story es un componente React</code>
          </pre>
          <p>Oh here, an image!</p>
          <br />
          <img
            style={image}
            src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          ></img>
          <h3>Muchas Gracias!</h3>
        </div>
      );
    },
  },
];

const StoriesPage = () => {
  const [show, setShow] = useState<boolean>(false);

  const reactPlugin = useAppInsightsContext();

  const trackPageView = useTrackPageView(reactPlugin);
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <>
      {!show && (
        <button className="btn btn-primary" onClick={() => setShow(true)}>
          Iniciar!
        </button>
      )}
      {show && (
        <div className="stories">
          <Stories
            loop={false}
            keyboardNavigation
            defaultInterval={10000}
            stories={stories2}
            onStoryEnd={(s: any, st: any) => console.log("story ended", s, st)}
            onAllStoriesEnd={(s: any, st: any) => {
              console.log("all stories ended", s, st);
              setShow(false);
            }}
            onStoryStart={(s: any, st: any) =>
              console.log("story started", s, st)
            }
            storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
          />
        </div>
      )}
    </>
  );
};

export default StoriesPage;

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle: React.CSSProperties = {
  background: "#333",
  width: "100%",
  padding: 20,
  color: "white",
  height: "100%",
};

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};