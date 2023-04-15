import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { useGetRequest } from '../../api/hooks/Request.tsx/useGetRequest';

const Request = () => {
  const { data, fetchNextPage, hasNextPage } = useGetRequest();
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

  if (data) console.log(data);

  const tags = data ? data.pages.flatMap(page => page.schedule) : [];

  return (
    <UI.StUploadedBlock>
      ✈️ RequestedList
      <UI.StDeviderBlock />
      <UI.StInsideBlock ref={targetDiv}>
        {/* {tags.map(tag => {
          return (
            <UI.StUploadedFileBlock key={tag.eventId}>
              <UI.StNameDateBlock>
                <UI.StContentSpan>😵‍💫 | {tag.userName}</UI.StContentSpan>
                <UI.StDateSpan> {tag.enrollDay}</UI.StDateSpan>
              </UI.StNameDateBlock>
              <UI.StContentSpan>📎 | {tag.fileName}</UI.StContentSpan>
            </UI.StUploadedFileBlock>
          );
        })} */}
      </UI.StInsideBlock>
    </UI.StUploadedBlock>
  );
};

export default Request;
