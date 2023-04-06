import React, { useState } from 'react';
import CategoryBox from './Category/CategoryBox';
import AddCategory from './Category/AddCategory';
import { StWrapperBlock, StFeedBlock } from './style';
import FeedTitle from './FeedTitle';

const Feed = () => {
  const [openCategoryInput, setOpenCategoryInput] = useState<boolean>(false);

  const categoryPlusHandler = () => {
    setOpenCategoryInput(prev => !prev);
  };

  return (
    <StWrapperBlock>
      <StFeedBlock>
        <FeedTitle onClick={categoryPlusHandler} />
        <CategoryBox />
        {openCategoryInput && <AddCategory />}
      </StFeedBlock>
    </StWrapperBlock>
  );
};

export default Feed;
