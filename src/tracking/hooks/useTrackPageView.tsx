import { ReactPlugin } from "@microsoft/applicationinsights-react-js";
import { IPageViewTelemetry } from "@microsoft/applicationinsights-web";

const useTrackPageView = (reactPlugin: ReactPlugin) => {
  const trackActivity = () => {
    const properties = { email: "hello@lautarocarro.com" };

    reactPlugin.trackPageView({
      name: document.title,
      isLoggedIn: true,
      properties: properties,
    } as IPageViewTelemetry);
  };

  return trackActivity;
};

export default useTrackPageView;
