import React from 'react';
import { FeedTitleProps } from './interfaces';
import * as UI from './style';

const FeedTitle = ({ onClick }: FeedTitleProps) => {
  return (
    <UI.StFeedTitleBlock>
      <UI.StFeedTitleH1>todo</UI.StFeedTitleH1>
      <UI.StPlusSpan onClick={onClick}>+</UI.StPlusSpan>
    </UI.StFeedTitleBlock>
  );
};

export default FeedTitle;
