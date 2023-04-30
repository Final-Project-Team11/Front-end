import React from 'react';
import { FeedTitleProps } from './interfaces';
import * as UI from './style';
import { recoilTabState } from '../../states/recoilTabState';
import { useRecoilValue } from 'recoil';

const FeedTitle = ({ clickFn }: FeedTitleProps) => {
  const tab = useRecoilValue(recoilTabState);
  return (
    <UI.StFeedTitleBlock>
      <UI.StFeedTitleH1 tab={tab}>todo</UI.StFeedTitleH1>
      <UI.StPlusSpan tab={tab} onMouseDown={clickFn}>
        +
      </UI.StPlusSpan>
    </UI.StFeedTitleBlock>
  );
};

export default FeedTitle;
