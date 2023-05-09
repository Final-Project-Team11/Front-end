import { useState } from 'react';
// 스타일, 인터페이스
import * as UI from './style';
import { COLOR } from '../../../styles/colors';
import { Category, PatchFeedPayload } from '../interfaces';
// 서버 요청
import { useDeleteFeed } from '../../../api/hooks/Feed/useDeleteFeed';
import { usePatchFeed } from '../../../api/hooks/Feed/usePatchFeed';
// 컴포넌트
import useInput from '../../../hooks/common/useInput';
import AddTodo from '../Todo/AddTodo';
import TodoBox from '../Todo/TodoBox';
// 라이브러리
import { BsX } from '@react-icons/all-files/bs/BsX';
import { recoilTabState } from '../../../states/recoilTabState';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';

const CategoryBox = ({ categoryId, categoryName, todos }: Category) => {
  // 투두 추가 input 오픈상태
  const [openTodoInput, setOpenTodoInput] = useState<boolean>(false);
  // 투두 useInput maxLength = 20
  const [AddTodoState, setAddTodoHandler, setAddTodoState] = useInput(20);
  // 테마 수정용 recoilState
  const tab = useRecoilValue(recoilTabState);
  // 카테고리 수정 요청
  const { mutate } = usePatchFeed();

  // category 내부의 + 버튼 눌렀을 때의 function
  const TodoPlusHandler = () => {
    // input이 닫혀있다면 열림
    if (!openTodoInput) {
      setOpenTodoInput(true);
    }
    // 인풋이 열려있고, input이 비어있지 않다면 post 동작, input 비움
    else if (openTodoInput === true && AddTodoState.length !== 0) {
      setAddTodoState('');
      setOpenTodoInput(false);
    }
    // 인풋이 열려있지만, 비어있다면 인풋 닫음
    else setOpenTodoInput(false);
  };

  // todos 정렬 - isDone false 를 위로, true 를 아래로
  if (todos.length !== 0) {
    todos.sort((a, b) => {
      if (a.isDone === b.isDone) {
        return 0;
      } else if (a.isDone === false) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  // 카테고리 삭제요청
  const { deleteFeed } = useDeleteFeed();

  // 삭제버튼 클릭 시 더블체크
  const deleteBtnHandler = () => {
    Swal.fire({
      title: '카테고리를 삭제하시겠어요?',
      text: '하위 todo도 삭제됩니다.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'black',
      cancelButtonColor: 'gray',
      confirmButtonText: '네.',
      cancelButtonText: '아니요.',
      reverseButtons: true,
      customClass: {
        title: 'sweet-alert-title',
        htmlContainer: 'sweet-alert-html-container',
      },
      didOpen: () => {
        const titleSpan = document.querySelector('.sweet-alert-title');
        const textSpan = document.querySelector('.sweet-alert-html-container');
        if (titleSpan && textSpan) {
          (titleSpan as HTMLElement).style.fontSize = '18px';
          (titleSpan as HTMLElement).style.fontWeight = 'bold';
          (textSpan as HTMLElement).style.color = 'gray';
        }
      },
    }).then(result => {
      if (result.isConfirmed) {
        deleteFeed({ type: 'category', id: categoryId });
      }
    });
  };

  // 카테고리 수정기능
  const ModifyCategory = async () => {
    const { value: inputValue } = await Swal.fire({
      title: '카테고리를 수정하시겠어요?',
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: COLOR.PAGE_BLUE,
      cancelButtonColor: COLOR.VACATION_RED,
      confirmButtonText: '입력한 내용으로 바꿀래요.',
      cancelButtonText: '아니요, 안바꿀래요.',
    });

    if (inputValue) {
      const payload: PatchFeedPayload = {
        feed: 'category',
        id: categoryId,
        content: {
          category: inputValue,
        },
      };
      mutate(payload);
    }
  };

  return (
    <>
      <UI.StCategoryWrapper>
        <UI.StCategoryTitleBlock tab={tab} onClick={ModifyCategory}>
          <UI.StCircleBlock />
          <UI.StCategoryH3>{categoryName}</UI.StCategoryH3>
        </UI.StCategoryTitleBlock>
        <UI.StPlusBlock onMouseDown={TodoPlusHandler}>+</UI.StPlusBlock>
        <UI.StDeleteBlock className="deleteBlock" onClick={deleteBtnHandler}>
          <BsX />
        </UI.StDeleteBlock>
      </UI.StCategoryWrapper>
      <UI.StCategoryBlock>
        {todos?.map(todo => {
          return <TodoBox key={todo.todoId} todo={todo} />;
        })}
        {openTodoInput && (
          <AddTodo
            value={AddTodoState}
            setValue={setAddTodoState}
            onChange={setAddTodoHandler}
            inputHandler={setOpenTodoInput}
            categoryId={categoryId}
          />
        )}
      </UI.StCategoryBlock>
    </>
  );
};

export default CategoryBox;
