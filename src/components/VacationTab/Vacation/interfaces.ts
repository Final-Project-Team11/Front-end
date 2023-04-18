export {};

export interface VacateProps {
  vacation: {
    eventId: number;
    userName: string;
    typeDetail: string;
    startDay: string;
    endDay: string;
    status: 'submit' | 'accept' | 'deny';
  };
}
