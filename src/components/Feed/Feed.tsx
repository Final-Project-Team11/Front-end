import React, { useState } from 'react';
import CategoryBox from './CategoryBox';
import AddCategory from './AddCategory';
import * as UI from './style';
import FeedTitle from './FeedTitle';

const Feed = () => {
  const [openCategoryInput, setOpenCategoryInput] = useState<boolean>(false);

  const categoryPlusHandler = () => {
    setOpenCategoryInput(prev => !prev);
  };

  return (
    <UI.Wrapper>
      <UI.FeedBox>
        <FeedTitle onClick={categoryPlusHandler} />
        <CategoryBox />
        {openCategoryInput && <AddCategory />}
      </UI.FeedBox>
    </UI.Wrapper>
  );
};

export default Feed;
