import { useEffect } from "react";
import { useAppInsightsContext } from "../../tracking/AppInsightsContext";
import useComponentTracking from "../../tracking/hooks/useComponentTracking";
import { RendererProps } from "../../utils/RendererProps";
import VideoRenderer from "./VideoRenderer";

interface TrackVideoRendererProps {
  name: string;
  renderer: RendererProps;
  tag: string;
}

const TrackVideoRenderer: React.FC<TrackVideoRendererProps> = ({
  name,
  renderer,
  tag,
}) => {
  const reactPlugin = useAppInsightsContext();
  const trackComponent = useComponentTracking(reactPlugin, name, {
    tag: tag,
  });

  useEffect(() => {
    trackComponent();
  }, []);

  return (
    <div>
      <VideoRenderer {...renderer} />
    </div>
  );
};

export default TrackVideoRenderer;
