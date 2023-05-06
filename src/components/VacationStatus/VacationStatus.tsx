import React from 'react';
import * as UI from './style';
import { useGetVacationStatus } from '../../api/hooks/Vacation/useGetVacationStatus';
import WorkingMeerkat from '../../assets/Meerkat/WorkingMeerkat';
import VacationMeerkat from '../../assets/Meerkat/VacationMeerkat';
import WaitingVacation from '../../assets/Meerkat/WaitingVacation';
import Loading from '../Loading/Loading';

const VacationStatus = () => {
  const { data, isLoading } = useGetVacationStatus();

  if (isLoading || !data) {
    return (
      <UI.LoadingBlock>
        <Loading />
      </UI.LoadingBlock>
    );
  }

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
