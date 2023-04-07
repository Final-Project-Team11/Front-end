export interface ModalProps {
  children: React.ReactNode;
  size?: 'small' | 'large';
  color?: string;
  background?: string;
  backgroundColor?: string;
  border?: string;
  name?: string;
  closeModal: () => void;
}

export interface CssProps {
  size?: 'small' | 'large';
  color?: string;
  background?: string;
  backgroundColor?: string;
  border?: string;
  name?: string;
}

export interface Sizes {
  [key: string]: {
    width: string;
    height: string;
  };
}
