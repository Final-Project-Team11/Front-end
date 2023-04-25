import React from 'react';
import { TagsProps } from '../interfaces';

import * as UI from './style';
import { usePatchTag } from '../../../api/hooks/Tag/usePatchTag';

const Tags = ({ tag, types }: TagsProps) => {
  const { tagCheck } = usePatchTag();

  // 멘션 클릭 시 체크
  const clickTagHandler = (mentionId: number) => {
    tagCheck(mentionId);
  };

  return (
    <UI.StTagsBlock isChecked={tag.isChecked}>
      <UI.StContentSpan
        types={types}
        onClick={() => !tag.isChecked && clickTagHandler(tag.mentionId)}
      >
        @ / {tag.title} {tag.userName}
      </UI.StContentSpan>
    </UI.StTagsBlock>
  );
};

export default Tags;
