import React from 'react';
import * as UI from './style';
import { FeedTitleProps } from './interfaces';

const FeedTitle = ({ onClick }: FeedTitleProps) => {
  return (
    <UI.FeedTitleBox>
      <UI.FeedTitle>feed</UI.FeedTitle>
      <UI.TestPlusButton onClick={onClick}>+</UI.TestPlusButton>
    </UI.FeedTitleBox>
  );
};

export default FeedTitle;
