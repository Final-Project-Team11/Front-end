export interface DetailProps {
  data: {
    content: string;
    endDay: string;
    startDay: string;
    eventId: number;
    file: string;
    status: string;
    title: string;
    userName: string;
    ref: string[];
  };
  isLoading: boolean;
  closeModal: () => void;
}
