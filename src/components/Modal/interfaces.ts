export interface ModalProps {
  children: React.ReactNode;
  size?: 'small' | 'large';
  name?: string;
  closeModal: () => void;
  style?: React.CSSProperties;
  background?: string;
}

export interface CssProps {
  size?: 'small' | 'large';
  name?: string;
  style?: React.CSSProperties;
  background?: string;
}

export interface Sizes {
  [key: string]: {
    width: string;
    height: string;
  };
}
