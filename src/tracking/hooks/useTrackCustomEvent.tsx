import { ReactPlugin } from "@microsoft/applicationinsights-react-js";

const useTrackCustomEvent = (
  reactPlugin: ReactPlugin,
  eventName: string,
  eventData: any
) => {
  const trackActivity = () => {
    eventData.email = "hello@lautarocarro.com";

    reactPlugin.trackEvent({ name: eventName }, eventData);
  };

  return trackActivity;
};

export default useTrackCustomEvent;
