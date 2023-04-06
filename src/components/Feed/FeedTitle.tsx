import React from 'react';
import * as UI from './style';
import { FeedTitleProps } from './interfaces';

const FeedTitle = ({ onClick }: FeedTitleProps) => {
  return (
    <UI.StFeedTitleBlock>
      <UI.StFeedTitleH1>feed</UI.StFeedTitleH1>
      <UI.StTestPlusBlock onClick={onClick}>+</UI.StTestPlusBlock>
    </UI.StFeedTitleBlock>
  );
};

export default FeedTitle;
