import React from 'react';

import { FeedTitleProps } from './interfaces';
import { StFeedTitleBlock, StFeedTitleH1, StPlusBlock } from './style';

const FeedTitle = ({ onClick }: FeedTitleProps) => {
  return (
    <StFeedTitleBlock>
      <StFeedTitleH1>feed</StFeedTitleH1>
      <StPlusBlock onClick={onClick}>+</StPlusBlock>
    </StFeedTitleBlock>
  );
};

export default FeedTitle;
