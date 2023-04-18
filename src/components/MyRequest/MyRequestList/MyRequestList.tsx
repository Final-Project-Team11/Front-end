import React from 'react';
import * as UI from './style';
import { BsCheckCircle, BsXCircle, BsCircle } from 'react-icons/bs';
import { MyListProps, TagsProps } from './interfaces';

const MyRequestList = ({ tag }: TagsProps) => {
  return (
    <UI.StFileBlock>
      <UI.StSpanBlock>
        <UI.StNameDateBlock>
          <UI.StFileSpan>{`🙋🏻‍♂️ | ${tag.userName}`}</UI.StFileSpan>
          <UI.StDateSpan>
            {tag.startDay === tag.endDay
              ? tag.startDay
              : `${tag.startDay} ~ ${tag.endDay}`}
          </UI.StDateSpan>
        </UI.StNameDateBlock>
        <UI.StFileSpan>{`💾 | ${tag.title}`}</UI.StFileSpan>
      </UI.StSpanBlock>
      <UI.StStatusBlock status={tag.status}>
        {tag.status === 'submit' ? (
          <BsCircle />
        ) : tag.status === 'accept' ? (
          <BsCheckCircle />
        ) : tag.status === 'deny' ? (
          <BsXCircle />
        ) : null}
      </UI.StStatusBlock>
    </UI.StFileBlock>
  );
};

export default MyRequestList;
