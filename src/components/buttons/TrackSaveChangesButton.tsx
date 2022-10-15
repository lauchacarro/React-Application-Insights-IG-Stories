import { useAppInsightsContext } from "../../tracking/AppInsightsContext";
import useTrackCustomEvent from "../../tracking/hooks/useTrackCustomEvent";
import SaveChangesButton from "./SaveChangesButton";

const TrackSaveChangesButton = () => {
  const reactPlugin = useAppInsightsContext();
  const trackComponent = useTrackCustomEvent(
    reactPlugin,
    "SaveChangesClick",
    {}
  );

  const handleButtonClick = () => {
    trackComponent();
  };

  return <SaveChangesButton onClick={handleButtonClick} />;
};


export default TrackSaveChangesButton;