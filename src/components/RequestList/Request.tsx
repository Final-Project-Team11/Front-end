import React, { useEffect, useRef } from 'react';
import * as UI from './style';
import { useGetRequest } from '../../api/hooks/Request.tsx/useGetRequest';
import { BsCheckCircleFill, BsCircle, BsXCircleFill } from 'react-icons/bs';

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

  const tags = data ? data.pages.flatMap(page => page.schedule) : [];

  return (
    <UI.StRequestedBlock>
      ✈️ RequestedList
      <UI.StDeviderBlock />
      <UI.StInsideBlock ref={targetDiv}>
        {tags.map(tag => {
          return (
            <UI.StRequestedListBlock key={tag.eventId}>
              <UI.StNameDateBlock>
                <UI.StNameDateDiv>
                  <UI.StNameSpan>😵‍💫 | {tag.userName}</UI.StNameSpan>
                  <UI.StDateSpan>
                    {tag.startDay === tag.endDay
                      ? tag.startDay
                      : `${tag.startDay} ~ ${tag.endDay}`}
                  </UI.StDateSpan>
                </UI.StNameDateDiv>
                <UI.StCircleBlock types={tag.status}>
                  {tag.status === 'submit' ? (
                    <BsCircle />
                  ) : tag.status === 'accept' ? (
                    <BsCheckCircleFill />
                  ) : tag.status === 'deny' ? (
                    <BsXCircleFill />
                  ) : null}
                </UI.StCircleBlock>
              </UI.StNameDateBlock>
              <UI.StContentSpan>📎 | {tag.title}</UI.StContentSpan>
            </UI.StRequestedListBlock>
          );
        })}
      </UI.StInsideBlock>
    </UI.StRequestedBlock>
  );
};

export default Request;
