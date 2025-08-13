import React, { useContext, useState } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";
import { TourContext } from "./contexts/TourContext";

const steps: Step[] = [
  {
    target: "#tour-header-baldes",
    content: "Clique aqui para acessar a página de Baldes!",
    disableBeacon: true,
    placement: "bottom",
  },
  {
    target: "#tour-select-tipo",
    content: "Aqui você pode escolher o tipo do balde.",
    placement: "bottom",
  },
  {
    target: "#tour-btn-add-balde",
    content: "Aqui você pode criar um novo balde.",
    placement: "bottom",
  },
];

const AppTour: React.FC = () => {
  const { tourActive, setTourActive } = useContext(TourContext);
  const [run, setRun] = useState(tourActive);

  React.useEffect(() => {
    setRun(tourActive);
  }, [tourActive]);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, index } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setTourActive(false);
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      showSkipButton
      spotlightClicks={true}
      disableOverlayClose={true}
      showProgress
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
    />
  );
};

export default AppTour;
