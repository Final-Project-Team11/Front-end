// 스타일, 인터페이스
import * as UI from './style';
import { COLOR } from '../../../styles/colors';
import { PatchFeedPayload, Todo } from '../interfaces';
// 서버 요청
import { useDeleteFeed } from '../../../api/hooks/Feed/useDeleteFeed';
import { useCheckTodo } from '../../../api/hooks/Feed/useCheckTodo';
import { usePatchFeed } from '../../../api/hooks/Feed/usePatchFeed';
// 라이브러리
import { BsX } from '@react-icons/all-files/bs/BsX';
import Swal from 'sweetalert2';
import { useRecoilValue } from 'recoil';
import { recoilTabState } from '../../../states/recoilTabState';

const TodoBox = ({ todo }: { todo: Todo }) => {
  // 테마 세팅용 recoilState
  const tab = useRecoilValue(recoilTabState);
  // 투두 done체크, 수정, 삭제 요청
  const { deleteFeed } = useDeleteFeed();
  const { mutate } = usePatchFeed();
  const { checkTodo } = useCheckTodo();

  // 삭제버튼 클릭 시 더블체크
  const deleteBtnHandler = (): void => {
    deleteFeed({ type: 'todo', id: todo.todoId });
  };

  //투두 체크 함수
  const clickCircleHandler = () => {
    checkTodo(todo.todoId);
  };

  // 투두 수정기능 - sweetAlert 수정 더블체크
  const ModifyCategory = async () => {
    const { value: inputValue } = await Swal.fire({
      title: '투두를 수정하시겠어요?',
      input: 'text',
      showCancelButton: true,
      confirmButtonColor: COLOR.PAGE_BLUE,
      cancelButtonColor: COLOR.VACATION_RED,
      confirmButtonText: '입력한 내용으로 바꿀래요.',
      cancelButtonText: '아니요.',
      reverseButtons: true,
    });

    if (inputValue) {
      const payload: PatchFeedPayload = {
        feed: 'todo',
        id: todo.todoId,
        content: {
          content: inputValue,
        },
      };
      mutate(payload);
    }
  };

  return (
    <UI.StTodoBlock>
      <UI.StTodoAreaBlock>
        <UI.StCircleBlock isDone={todo.isDone} onClick={clickCircleHandler} tab={tab} />
        <UI.StTodoSpan onClick={ModifyCategory}>{todo.todo}</UI.StTodoSpan>
      </UI.StTodoAreaBlock>
      <UI.StTodoDeleteButton className="deleteBlock" onClick={deleteBtnHandler}>
        <BsX />
      </UI.StTodoDeleteButton>
    </UI.StTodoBlock>
  );
};

export default TodoBox;
