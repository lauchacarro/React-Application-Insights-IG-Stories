import { useEffect } from "react";
import TrackSaveChangesButton from "../components/buttons/TrackSaveChangesButton";
import TrackTermsAndConditionsButton from "../components/buttons/TrackTermsAndConditionsButton";
import TrackWhatsappButton from "../components/buttons/TrackWhatsappButton";
import { useAppInsightsContext } from "../tracking/AppInsightsContext";
import useTrackPageView from "../tracking/hooks/useTrackPageView";

const ButtonsPage = () => {
  const reactPlugin = useAppInsightsContext();

  const trackPageView = useTrackPageView(reactPlugin);
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <TrackSaveChangesButton />
      </div>
      <div className="row justify-content-center">
        <TrackWhatsappButton />
      </div>

      <div className="row justify-content-center">
        <TrackTermsAndConditionsButton />
      </div>
    </div>
  );
};

export default ButtonsPage;
