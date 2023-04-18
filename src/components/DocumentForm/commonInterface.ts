interface ScheduleProps {
  props: {
    eventId?: number;
    eventType?: string;
    title?: string;
    username?: string;
    startDay?: Date;
    endDay?: Date;
    body?: string;
    mention?: string[];
    propsRef?: React.RefObject<HTMLDivElement>;
    tab: number;
    userId?: string;
    isReadOnly?: boolean;
  };
  onReturnHandler?: React.Dispatch<React.SetStateAction<boolean>>;
}
