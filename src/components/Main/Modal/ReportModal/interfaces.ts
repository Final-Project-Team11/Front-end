export type ReportInfo = {
  title: string;
  body: string;
  location: string;
  author: string;
};

export type ReportModalProps = {
  value?: string | number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
