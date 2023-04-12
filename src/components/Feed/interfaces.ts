export interface FeedTitleProps {
  onClick: () => void;
}

export interface Category {
  categoryId: number;
  categoryName: string;
  todos: { todoId: number; todo: string; isDone: boolean }[];
}
