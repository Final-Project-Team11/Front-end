import styled from 'styled-components';

// 탭
export const StBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Tap = styled.form`
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

// 탭 선택 버튼
export const TapButtonWrapper = styled.div`
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

export const TapButton = styled.div<TapButtonProps>`
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
