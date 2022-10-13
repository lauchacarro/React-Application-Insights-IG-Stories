import React from "react";
import "./App.css";
import Stories from "react-insta-stories";
import { Renderer, Story } from "react-insta-stories/dist/interfaces";
import ImageRenderer from "./components/ImageRenderer";
import { AppInsightsContextProvider } from "./tracking/AppInsightsContext";
import TrackImageRenderer from "./components/TrackImageRenderer";
import TrackVideoRenderer from "./components/TrackVideoRenderer";

function App() {
  return (
    <AppInsightsContextProvider>
      <div className="App">
        <div className="stories">
          <Stories
            loop={false}
            keyboardNavigation
            defaultInterval={10000}
            stories={stories2}
            onStoryEnd={(s: any, st: any) => console.log("story ended", s, st)}
            onAllStoriesEnd={(s: any, st: any) =>
              console.log("all stories ended", s, st)
            }
            onStoryStart={(s: any, st: any) =>
              console.log("story started", s, st)
            }
            storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
          />
        </div>
      </div>
    </AppInsightsContextProvider>
  );
}

const Story1: Renderer = (props) => {
  props.story.url = "/img/stories/bitcoin (1).png";

  return <TrackImageRenderer name="Bitcoin Piernas" renderer={props} tag="bitcoin" />;
};

const Story2: Renderer = (props) => {
  props.story.url = "/img/stories/playa (1).png";

  return <TrackImageRenderer name="Playa Cabañas" renderer={props} tag="playa" />;
};

const Story3: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (1).png";

  return <TrackImageRenderer name="IPhone 14" renderer={props} tag="iphone" />;
};

const Story4: Renderer = (props) => {
  props.story.url = "/videos/bitcoinvideo.mp4";
  props.story.type = "video";
  return <TrackVideoRenderer name="Bitcoin Video" renderer={props} tag="bitcoin" />;
};

const Story5: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (2).png";

  return <TrackImageRenderer name="2 IPhones" renderer={props} tag="iphone" />;
};

const Story6: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (3).png";

  return <TrackImageRenderer name="IPhone Prendido" renderer={props} tag="iphone" />;
};

const Story7: Renderer = (props) => {
  props.story.url = "/videos/playavideo.mp4";
  props.story.type = "video";
  return <TrackVideoRenderer name="Playa Video" renderer={props} tag="playa" />;
};

const Story8: Renderer = (props) => {
  props.story.url = "/img/stories/bitcoin (3).png";
  return <TrackImageRenderer name="Bitcoin Moneda" renderer={props} tag="bitcoin" />;
};

const Story9: Renderer = (props) => {
  props.story.url = "/img/stories/iphone (4).png";
  return <TrackImageRenderer name="IPhone Plantas" renderer={props} tag="iphone" />;
};
const Story10: Renderer = (props) => {
  props.story.url = "/img/stories/playa (3).png";
  return <TrackImageRenderer name="Playa Paisaje" renderer={props} tag="playa" />;
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
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

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

const customSeeMore: React.CSSProperties = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
};

export default App;
