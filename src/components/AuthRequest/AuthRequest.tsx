import React from 'react';
import * as UI from './style';

import Board from '../Board/Board';
import { COLOR } from '../../styles/colors';
import BusinessIcon from '../../assets/Icons/BusinessIcon';
import Person from '../../assets/Icons/Person';
import File from '../../assets/Icons/File';

const AuthRequest = () => {
  const icon = <BusinessIcon width="21px" height="15px" fill={COLOR.PAGE_BLUE} />;

  return (
    <Board icon={icon} title="결재 요청">
      <UI.StInsideBlock>
        {/* {requests.map(request => {
          return <RequestedOne key={request.eventId} request={request} />;
        })} */}
        <UI.StUploadedFileBlock>
          <UI.StNameDateBlock>
            <UI.StContentSpan>
              <Person colors="gray" /> | 준비중
            </UI.StContentSpan>
            <UI.StDateSpan className="date"> 준비일</UI.StDateSpan>
          </UI.StNameDateBlock>
          <UI.StContentSpan>
            <File colors="gray" /> | 준비중인 요청서
          </UI.StContentSpan>
        </UI.StUploadedFileBlock>
      </UI.StInsideBlock>
    </Board>
  );
};

export default AuthRequest;
