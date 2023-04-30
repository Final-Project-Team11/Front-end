import styled from 'styled-components';

export const StBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const StSpan = styled.span`
  font-size: 12px;
`;

export const SubmitForm = styled.form`
  width: 430px;
  height: 310px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 30px;
`;

export const TextWrapper = styled.div`
  width: 430px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 45px 0 13px 0;
`;

export const TabButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: 50px;
  gap: 80px;
`;

interface TapButtonProps {
  isSelected: boolean;
}

export const TabButton = styled.div<TapButtonProps>`
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
