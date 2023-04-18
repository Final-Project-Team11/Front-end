export interface FeedTitleProps {
  onClick: () => void;
}
interface Todo {
  todoId: number;
  todo: string;
  isDone: boolean;
}
export interface Category {
  categoryId: number;
  categoryName: string;
  todos: Todo[] | [];
}
