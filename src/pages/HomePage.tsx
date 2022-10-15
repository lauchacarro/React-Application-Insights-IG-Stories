import { useEffect } from "react";
import { useAppInsightsContext } from "../tracking/AppInsightsContext";
import useTrackPageView from "../tracking/hooks/useTrackPageView";

const HomePage = () => {
    const reactPlugin = useAppInsightsContext();

    const trackPageView = useTrackPageView(reactPlugin);
    useEffect(() => {
      trackPageView();
    }, []);

    return <><h1>Hola mundo!</h1></>
}

export default HomePage