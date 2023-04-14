import React, { useState, useEffect } from 'react';
import * as UI from './style';
import Tags from './Tags/Tags';
import { useMentionedSchedules } from '../../api/hooks/Tag/useGetTag';
import { TagElement } from './Tags/interfaces';

const Tag = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useMentionedSchedules();

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      hasNextPage
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const tags = data ? [...data.pages[0].mention] : [];
  console.log(tags);

  return (
    <UI.StTagBlock>
      📌
      <UI.StDeviderBlock />
      <UI.StFeedBlock>
        {tags.map((tag: TagElement) => {
          return <Tags key={tag.eventId} tag={tag} />;
        })}
      </UI.StFeedBlock>
    </UI.StTagBlock>
  );
};

export default Tag;
