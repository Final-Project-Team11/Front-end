import React, { useState } from 'react';
import CategoryBox from './Category/CategoryBox';
import AddCategory from './Category/AddCategory';
import { StWrapperBlock, StFeedBlock } from './style';
import FeedTitle from './FeedTitle';
import { useGetPosts } from '../../api/hooks/Feed/useGetFeed';
import { Category } from './interfaces';
import useInput from '../../hooks/common/useInput';

const Feed = () => {
  const [openCategoryInput, setOpenCategoryInput] = useState<boolean>(false);
  const [categoryState, categoryStateHandler, setCategoryState] = useInput();

  const categoryPlusHandler = () => {
    // input이 닫혀있다면 열림
    if (!openCategoryInput) {
      setOpenCategoryInput(true);
    }
    // 인풋이 열려있고, input이 비어있지 않다면 post 동작, input 비움
    else if (openCategoryInput === true && categoryState.length !== 0) {
      console.log('value 있음, 쿼리동작');
      setCategoryState('');
      setOpenCategoryInput(false);
    }
    // 인풋이 열려있지만, 비어있다면 인풋 닫음
    else setOpenCategoryInput(false);
  };

  const { feed, feedIsLoading } = useGetPosts();

  if (feedIsLoading) {
    return <div>Loading...</div>;
  }
  return (
    <StWrapperBlock>
      <StFeedBlock>
        <FeedTitle onClick={categoryPlusHandler} />
        {feed?.map((category: Category) => {
          return (
            <CategoryBox
              key={category.categoryId}
              category={category.categoryName}
              todos={category.todos}
            />
          );
        })}
        {openCategoryInput && (
          <AddCategory
            value={categoryState}
            onChange={categoryStateHandler}
            setValue={setCategoryState}
          />
        )}
      </StFeedBlock>
    </StWrapperBlock>
  );
};

export default Feed;
