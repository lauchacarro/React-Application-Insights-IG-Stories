import { Action, Story } from "react-insta-stories/dist/interfaces";

export interface RendererProps {
    action: Action;
    isPaused: boolean;
    story: Story;
    config: {
      width?: number | string;
      height?: number | string;
      loader?: JSX.Element;
      header?: Function;
      storyStyles?: Object;
    };
    messageHandler: (
      type: string,
      data: any
    ) => {
      ack: "OK" | "ERROR";
    };
  }