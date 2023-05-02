export interface FeedTitleProps {
  clickFn: () => void;
}
export interface Todo {
  todoId: number;
  todo: string;
  isDone: boolean;
}
export interface Category {
  categoryId: number;
  categoryName: string;
  todos: Todo[] | [];
}

export interface TitleProps {
  tab?: boolean;
}

//AddCategory
export interface AddCategoryProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string) => void;
  inputHandler: (value: React.SetStateAction<boolean>) => void;
}
export interface SentCategory {
  category: string;
}

//AddTodo
export interface AddTodoProps extends AddCategoryProps {
  categoryId: number;
}

export interface SentTodo {
  categoryId: number;
  content: {
    content: string;
  };
}

export interface PatchFeedPayload {
  feed: 'category' | 'todo';
  id: number;
  content: {
    [key: string]: string;
  };
}
