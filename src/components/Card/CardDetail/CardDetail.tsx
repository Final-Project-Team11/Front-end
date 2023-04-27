import React, { useState } from 'react';
import * as UI from './style';
import { CardInfoType } from '../interfaces';
import { StButton } from '../../Button/styles';

const CardDetail = ({ data }: { data: CardInfoType }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <UI.StCardDetailBlock>
      <UI.StTopBlock>
        <UI.StTopLeftBlock>
          <UI.StProfileImg>
            <img src={data.profileImg} alt="" />
          </UI.StProfileImg>
          <UI.StProfileModifyInput type="file" />
        </UI.StTopLeftBlock>
        <UI.StTopRightBlock></UI.StTopRightBlock>
      </UI.StTopBlock>
      <UI.StMiddleBlock>
        <UI.StInfoBlock>
          <UI.StInfoType>생일 : </UI.StInfoType>
          {data.birthDay}
        </UI.StInfoBlock>
        <UI.StInfoBlock>
          <UI.StInfoType>핸드폰 번호 : </UI.StInfoType>
          {data.phoneNum}
        </UI.StInfoBlock>
      </UI.StMiddleBlock>
      <UI.StBottomBlock>
        <UI.StInfoType>입사일{data.joinDay}</UI.StInfoType>
        {/* 수정모드 진입 버튼 */}
        {isEditMode ? (
          <StButton size="signup" onClick={() => setIsEditMode(false)}>
            수정완료
          </StButton>
        ) : (
          <StButton size="signup" onClick={() => setIsEditMode(true)}>
            수정하기
          </StButton>
        )}
      </UI.StBottomBlock>
    </UI.StCardDetailBlock>
  );
};

export default CardDetail;
