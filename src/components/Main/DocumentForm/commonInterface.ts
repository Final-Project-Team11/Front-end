export interface ScheduleProps {
  props: {
    Id?: string | number;
    id?: string | number;
    calendarId?: string;
    title?: string;
    body?: string;
    start?: Date;
    end?: Date;
    attendees?: string[];
    location?: string;
    userId?: string;
    userName?: string;
    typeDetail?: string;
    backgroundColor?: string;
    files?: [
      {
        fileLocation?: string;
        fileName?: string;
      }
    ];
    isReadOnly?: boolean;
  };
  propsRef?: React.RefObject<HTMLDivElement>;
  onReturnHandler?: React.Dispatch<React.SetStateAction<boolean>>;
  onCancelHandler: (id?: number | string, calendarId?: number | string) => void;
}

export interface ErrorData {
  errorMessage: string;
  success: boolean;
}
