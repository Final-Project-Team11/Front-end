export interface ScheduleProps {
  props: {
    id?: number | string;
    calendarId?: string;
    title?: string;
    userName?: string;
    start?: Date;
    end?: Date;
    body?: string;
    attendees?: string[];
    propsRef?: React.RefObject<HTMLDivElement>;
    userId?: string;
    isReadOnly?: boolean;
    ref?: string[];
    file?: File | string;
    backgroundColor?: string;
    location?: string;
  };
  onReturnHandler?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ErrorData {
  errorMessage: string;
  success: boolean;
}
