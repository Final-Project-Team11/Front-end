import { useState } from 'react';
// 스타일, 인터페이스
import * as UI from './style';
import { Category } from './interfaces';
// 서버 요청
import { useGetFeed } from '../../api/hooks/Feed/useGetFeed';
// 컴포넌트
import CategoryBox from './Category/CategoryBox';
import AddCategory from './Category/AddCategory';
import FeedTitle from './FeedTitle';
import useInput from '../../hooks/common/useInput';
import Loading from '../Loading/Loading';

const Feed = () => {
  // 카테고리 추가 인풋 상태
  const [openCategoryInput, setOpenCategoryInput] = useState<boolean>(false);
  // 카테고리 useInput - maxLength 10
  const [categoryState, categoryStateHandler, setCategoryState] = useInput(10);

  // 카테고리 추가버튼 클릭함수
  const categoryPlusHandler = () => {
    // input이 닫혀있다면 열림
    if (openCategoryInput === false) {
      setOpenCategoryInput(true);
    }
    // 인풋이 열려있고, input이 비어있지 않다면 post 동작, input 비움
    else if (openCategoryInput && categoryState.length !== 0) {
      setCategoryState('');
      setOpenCategoryInput(false);
    }
    // 인풋이 열려있지만, 비어있다면 인풋 닫음
    else {
      setOpenCategoryInput(false);
    }
  };

  // 피드 정보 요청
  const { feed, feedIsLoading } = useGetFeed();

  // 로딩
  if (feedIsLoading && !feed) {
    return (
      <UI.LoadingBlock>
        <Loading />
      </UI.LoadingBlock>
    );
  }

  return (
    <UI.StWrapperBlock>
      <FeedTitle clickFn={categoryPlusHandler} />
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
