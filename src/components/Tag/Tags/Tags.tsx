import React from 'react';
import { TagsProps } from './interfaces';

import * as UI from './style';
import { usePatchTag } from '../../../api/hooks/Tag/usePatchTag';

const Tags = ({ tag }: TagsProps) => {
  const { eventId, title, userName, mentionId, isChecked, eventType } = tag;

  const { tagCheck } = usePatchTag();

  const clickTagHandler = (mentionId: number) => {
    tagCheck(mentionId);
  };

  return (
    <UI.StTagsBlock
      isChecked={isChecked}
      onClick={() => !isChecked && clickTagHandler(mentionId)}
    >
      <UI.StTagsSpan>
        @ / {title} {userName}
      </UI.StTagsSpan>
    </UI.StTagsBlock>
  );
};

export default Tags;
