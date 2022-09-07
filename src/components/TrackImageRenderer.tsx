import { useEffect } from "react";
import { useAppInsightsContext } from "../tracking/AppInsightsContext";
import useComponentTracking from "../tracking/hooks/useComponentTracking";
import { RendererProps } from "../utils/RendererProps";
import ImageRenderer from "./ImageRenderer";

interface TrackImageRendererProps {
  name: string;
  renderer: RendererProps;
  tag: string;
}

const TrackImageRenderer: React.FC<TrackImageRendererProps> = ({
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
      <ImageRenderer {...renderer} />
    </div>
  );
};

export default TrackImageRenderer;
