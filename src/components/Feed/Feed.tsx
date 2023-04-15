import React, { useState } from 'react';
import CategoryBox from './Category/CategoryBox';
import AddCategory from './Category/AddCategory';
import * as UI from './style';
import FeedTitle from './FeedTitle';
import { useGetFeed } from '../../api/hooks/Feed/useGetFeed';
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
      setCategoryState('');
      setOpenCategoryInput(false);
    }
    // 인풋이 열려있지만, 비어있다면 인풋 닫음
    else setOpenCategoryInput(false);
  };

  const { feed, feedIsLoading } = useGetFeed();

  if (feedIsLoading && !feed) {
    return <div>Loading...</div>;
  }

  return (
    <UI.StWrapperBlock>
      <FeedTitle onClick={categoryPlusHandler} />
      <UI.StFeedBlock>
        {feed?.map((category: Category) => {
          return (
            <CategoryBox
              key={category.categoryId}
              categoryName={category.categoryName}
              categoryId={category.categoryId}
              todos={category.todos}
            />
          );
        })}
        {openCategoryInput && (
          <AddCategory
            value={categoryState}
            setValue={setCategoryState}
            onChange={categoryStateHandler}
            inputHandler={setOpenCategoryInput}
          />
        )}
      </UI.StFeedBlock>
    </UI.StWrapperBlock>
  );
};

export default Feed;
