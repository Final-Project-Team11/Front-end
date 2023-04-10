export interface CategoryBoxProps {
  category: string;
  todos: { todoId: number; content: string; isDone: boolean }[];
}
