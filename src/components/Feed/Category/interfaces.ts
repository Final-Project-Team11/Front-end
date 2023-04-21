export interface CategoryBoxProps {
  categoryId: number;
  categoryName: string;
  todos: { todoId: number; todo: string; isDone: boolean }[] | [];
}

export interface AddCategoryProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string) => void;
  inputHandler: (value: React.SetStateAction<boolean>) => void;
}

export interface SentCategory {
  category: string;
}
export interface CategoryStyle {
  tab?: number;
}
