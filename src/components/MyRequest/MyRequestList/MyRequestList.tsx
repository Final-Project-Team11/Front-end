import React from 'react';
import * as UI from './style';
import { BsCheckCircle, BsXCircle, BsCircle } from 'react-icons/bs';
import { FileProps } from './interfaces';

const MyRequestList = ({ file }: FileProps) => {
  return (
    <UI.StFileBlock status={file.status}>
      <UI.StSpanBlock>
        <UI.StNameDateBlock>
          <UI.StFileSpan>{`🙋🏻‍♂️ | ${file.userName}`}</UI.StFileSpan>
          <UI.StDateSpan className="date">
            {file.startDay === file.endDay
              ? file.startDay
              : `${file.startDay} ~ ${file.endDay}`}
          </UI.StDateSpan>
        </UI.StNameDateBlock>
        <UI.StFileSpan>
          💾 |{' '}
          {file.status === 'submit' ? (
            file.title
          ) : (
            <UI.StRejectedSpan>{file.title}</UI.StRejectedSpan>
          )}
        </UI.StFileSpan>
      </UI.StSpanBlock>
      <UI.StStatusBlock status={file.status}>
        {file.status === 'submit' ? (
          <BsCircle />
        ) : file.status === 'accept' ? (
          <BsCheckCircle />
        ) : file.status === 'deny' ? (
          <BsXCircle />
        ) : null}
      </UI.StStatusBlock>
    </UI.StFileBlock>
  );
};

export default MyRequestList;
