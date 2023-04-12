export interface TodoBoxProps {
  todo: string;
  isDone: boolean;
}

export interface TodoBoxStProps {
  isDone?: boolean;
}

export interface AddTodoProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string) => void;
}
