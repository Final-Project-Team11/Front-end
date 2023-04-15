import React, { useEffect, useRef } from 'react';
import { UploadedFileTabProps, UploadedFileList } from './interfaces';
import * as UI from './style';
import { useGetFile } from '../../api/hooks/UploadedFile/useGetFile';

const UploadedFileTab = ({ type, icon }: UploadedFileTabProps) => {
  const { data, fetchNextPage, hasNextPage } = useGetFile(type);
  const targetDiv = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    const container = targetDiv.current;

    if (container) {
      const scrollHeight = container.scrollHeight;
      const scrollTop = container.scrollTop;
      const clientHeight = container.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && hasNextPage) {
        fetchNextPage();
      }
    }
  };

  // div에 스크롤 이벤트 추가.
  useEffect(() => {
    const container = targetDiv.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  const tags = data ? data.pages.flatMap(page => page[type] as UploadedFileList[]) : [];

  console.log(tags);

  return (
    <UI.StUploadedBlock>
      {icon}
      <UI.StDeviderBlock />
      <UI.StInsideBlock ref={targetDiv}>
        {tags.map((tag: UploadedFileList) => {
          return (
            <UI.StUploadedFileBlock
              key={tag.eventId}
              onClick={() => console.log(tag.eventType)}
            >
              <UI.StNameDateBlock>
                <UI.StContentSpan>😵‍💫 | {tag.userName}</UI.StContentSpan>
                <UI.StDateSpan> {tag.enrollDay}</UI.StDateSpan>
              </UI.StNameDateBlock>
              <UI.StContentSpan>📎 | {tag.fileName}</UI.StContentSpan>
            </UI.StUploadedFileBlock>
          );
        })}
      </UI.StInsideBlock>
    </UI.StUploadedBlock>
  );
};

export default UploadedFileTab;
