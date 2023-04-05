export interface TextAreaProps {
  children?: React.ReactNode;
  // TextArea 컴포넌트의 자식 노드
  inputSize?: 'small' | 'medium' | 'large';
  // TextArea의 크기 옵션
  color?: 'string';
  background?: 'string';
  border?: 'string';
  type?: 'text';
  name?: string;
  value?: string;
  required?: boolean;
  placeholder?: string;
  // maxlength?: number;
  // minlength?: number;
}

export interface CssProps {
  inputSize?: 'small' | 'medium' | 'large';
  // CSS에서 사용될 TextArea의 크기 옵션
  color?: 'string';
  // CSS에서 사용될 TextArea의 텍스트 색상
  background?: 'string';
  // CSS에서 사용될 TextArea의 배경 색상
  border?: 'string';
  // CSS에서 사용될 TextArea의 테두리 스타일
}

// Sizes 객체
export interface Sizes {
  [key: string]: {
    width: string;
    // key값으로 사용될 문자열을 받아 해당하는 width 값을 반환 한다.
    height: string;
    // key값으로 사용될 문자열을 받아 해당하는 height 값을 반환 한다.
  };
}
