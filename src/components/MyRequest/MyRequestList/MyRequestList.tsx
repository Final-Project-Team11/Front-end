import React from 'react';
import * as UI from './style';
import { BsCheckCircle, BsXCircle, BsCircle } from 'react-icons/bs';
import { MyListProps, TagsProps } from './interfaces';

const MyRequestList = ({ tag }: TagsProps) => {
  return (
    <UI.StFileBlock>
      <UI.StSpanBlock>
        <UI.StFileSpan>{`🙋🏻‍♂️ | ${tag.userName}`}</UI.StFileSpan>
        <UI.StFileSpan>
          {tag.startDay === tag.endDay ? tag.startDay : `${tag.startDay} ~ ${tag.endDay}`}
        </UI.StFileSpan>
        <UI.StFileSpan>{`💾 | ${tag.title}`}</UI.StFileSpan>
      </UI.StSpanBlock>
      <UI.StStatusBlock>
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
