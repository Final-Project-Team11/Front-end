import React from 'react';
import { FeedTitleProps } from './interfaces';
import * as UI from './style';

const FeedTitle = ({ clickFn }: FeedTitleProps) => {
  return (
    <UI.StFeedTitleBlock>
      <UI.StFeedTitleH1>todo</UI.StFeedTitleH1>
      <UI.StPlusSpan onMouseDown={clickFn}>+</UI.StPlusSpan>
    </UI.StFeedTitleBlock>
  );
};

export default FeedTitle;
