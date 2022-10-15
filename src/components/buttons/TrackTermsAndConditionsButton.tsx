import { useAppInsightsContext } from "../../tracking/AppInsightsContext";
import useTrackCustomEvent from "../../tracking/hooks/useTrackCustomEvent";
import TermsAndConditionsButton from "./TermsAndConditionsButton";

const TrackTermsAndConditionsButton = () => {
  const reactPlugin = useAppInsightsContext();
  const trackComponent = useTrackCustomEvent(
    reactPlugin,
    "TermsAndConditionsClick",
    {}
  );

  const handleButtonClick = () => {
    trackComponent();
  };

  return <TermsAndConditionsButton onClick={handleButtonClick} />;
};


export default TrackTermsAndConditionsButton;