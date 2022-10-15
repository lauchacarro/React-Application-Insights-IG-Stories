import { useAppInsightsContext } from "../../tracking/AppInsightsContext";
import useTrackCustomEvent from "../../tracking/hooks/useTrackCustomEvent";
import WhatsappButton from "./WhatsappButton";

const TrackWhatsappButton = () => {
  const reactPlugin = useAppInsightsContext();
  const trackComponent = useTrackCustomEvent(
    reactPlugin,
    "WhatsappClick",
    {}
  );

  const handleButtonClick = () => {
    trackComponent();
  };

  return <WhatsappButton onClick={handleButtonClick} />;
};


export default TrackWhatsappButton;