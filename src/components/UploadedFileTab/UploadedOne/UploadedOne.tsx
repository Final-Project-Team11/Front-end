import React from 'react';
import * as UI from './style';
import { Props } from './interfaces';

const UploadedOne = ({ file }: Props) => {
  return (
    <UI.StUploadedFileBlock key={file.eventId}>
      <UI.StNameDateBlock>
        <UI.StContentSpan>😵‍💫 | {file.userName}</UI.StContentSpan>
        <UI.StDateSpan className="date"> {file.enrollDay}</UI.StDateSpan>
      </UI.StNameDateBlock>
      <UI.StContentSpan>📎 | {file.fileName}</UI.StContentSpan>
    </UI.StUploadedFileBlock>
  );
};

export default UploadedOne;
