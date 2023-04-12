import React from 'react';

import { FeedTitleProps } from './interfaces';
import * as UI from './style';

const FeedTitle = ({ onClick }: FeedTitleProps) => {
  return (
    <UI.StFeedTitleBlock>
      <UI.StFeedTitleH1>feed</UI.StFeedTitleH1>
      <UI.StPlusBlock onClick={onClick}>+</UI.StPlusBlock>
    </UI.StFeedTitleBlock>
  );
};

export default FeedTitle;
