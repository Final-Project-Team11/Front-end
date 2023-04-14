import React from 'react';
import { TagsProps } from './interfaces';

import * as UI from './style';

const Tags = ({ tag }: TagsProps) => {
  const { eventId, title, userName, mentionId, isChecked, eventType } = tag;
  return (
    <UI.StTagsBlock isChecked={isChecked}>
      <UI.StTagsSpan>
        @ / {title} {userName}
      </UI.StTagsSpan>
    </UI.StTagsBlock>
  );
};

export default Tags;
