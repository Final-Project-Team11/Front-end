import React, { useState } from 'react';
import CategoryBox from './Category/CategoryBox';
import AddCategory from './Category/AddCategory';
import { StWrapperBlock, StFeedBlock } from './style';
import FeedTitle from './FeedTitle';
import { useGetPosts } from '../../api/hooks/Feed/useGetFeed';
import { Category } from './interfaces';

const Feed = () => {
  const [openCategoryInput, setOpenCategoryInput] = useState<boolean>(false);

  const categoryPlusHandler = () => {
    setOpenCategoryInput(prev => !prev);
  };

  const { feed } = useGetPosts();
  console.log(feed);

  return (
    <StWrapperBlock>
      <StFeedBlock>
        <FeedTitle onClick={categoryPlusHandler} />
        {feed?.map((category: Category) => {
          return (
            <CategoryBox
              key={category.categoryId}
              category={category.category}
              todos={category.todos}
            />
          );
        })}
        {openCategoryInput && <AddCategory />}
      </StFeedBlock>
    </StWrapperBlock>
  );
};

export default Feed;
