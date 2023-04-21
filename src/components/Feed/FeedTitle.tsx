import React, { useContext } from 'react';
import { FeedTitleProps } from './interfaces';
import * as UI from './style';
import { TabContext } from '../../pages/Main/Main';

const FeedTitle = ({ clickFn }: FeedTitleProps) => {
  const tab = useContext<number>(TabContext);
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
