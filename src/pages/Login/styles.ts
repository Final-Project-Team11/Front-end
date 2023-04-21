import styled from 'styled-components';

export const StBlock = styled.div`
  width: 500px;
  height: 425px;

  margin: auto;
  margin-top: 100px;
`;

export const Tap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TapButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  width: 434px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 43px;
`;

export const TapButton = styled.div<TapButtonProps>`
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'nomal')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface TapButtonProps {
  isSelected: boolean;
}
