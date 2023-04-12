export interface CategoryBoxProps {
  category: string;
  todos: { todoId: number; todo: string; isDone: boolean }[];
}

export interface AddCategoryProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // setValue: (value: string) => void;
}
