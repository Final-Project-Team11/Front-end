import React from 'react';
import * as UI from './style';
import { useGetVacationStatus } from '../../api/hooks/Vacation/useGetVacationStatus';
import WorkingMeerkat from '../../assets/Meerkat/WorkingMeerkat';
import VacationMeerkat from '../../assets/Meerkat/VacationMeerkat';
import WaitingVacation from '../../assets/Meerkat/WaitingVacation';

const VacationStatus = () => {
  const { data } = useGetVacationStatus();
  console.log(data);

  let svgFile;
  if (data) {
    if (data.status === 'accept') {
      svgFile = <VacationMeerkat />;
    } else if (data.status === 'submit') {
      svgFile = <WaitingVacation />;
    } else {
      svgFile = <WorkingMeerkat />;
    }
  }

  return <UI.SvgBlock>{svgFile}</UI.SvgBlock>;
};

export default VacationStatus;
