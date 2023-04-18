import React from 'react';
import { TagsProps } from './interfaces';

import * as UI from './style';
import { usePatchTag } from '../../../api/hooks/Tag/usePatchTag';

const Tags = ({ tag, types }: TagsProps) => {
  const { eventId, title, userName, mentionId, isChecked, eventType } = tag;

  const { tagCheck } = usePatchTag();

  // 멘션 클릭 시 체크
  const clickTagHandler = (mentionId: number) => {
    tagCheck(mentionId);
  };

  return (
    <UI.StTagsBlock
      isChecked={isChecked}
      onClick={() => !isChecked && clickTagHandler(mentionId)}
    >
      <UI.StContentSpan types={types}>
        @ / {title} {userName}
      </UI.StContentSpan>
    </UI.StTagsBlock>
  );
};

export default Tags;
