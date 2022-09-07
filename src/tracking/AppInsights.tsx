import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import {
  ReactPlugin,
  withAITracking,
} from "@microsoft/applicationinsights-react-js";
import { ComponentType } from "react";

const reactPlugin = new ReactPlugin();
const ai = new ApplicationInsights({
  config: {
    instrumentationKey: "0c4b6f05-ef7f-41eb-a838-5aed1c075dbf",
    extensions: [reactPlugin],
    extensionConfig: {
      // [reactPlugin.identifier]: { history: globalHistory }
    },
  },
});
ai.loadAppInsights();

export default (Component: ComponentType<unknown>) =>
  withAITracking(reactPlugin, Component);
export const appInsights = ai.appInsights;
export { reactPlugin };
