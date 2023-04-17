import styled from 'styled-components';

export const StBlock = styled.div`
  width: 500px;
  height: 425px;

  margin: auto;
  margin-top: 100px;

  border: 1px solid black;
  box-sizing: border-box;
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

  margin-top: 43px;
  gap: 18px;
`;

export const TextWrapper = styled.div`
  width: 434px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 33px;
  margin-bottom: 11px;
`;

export const TapButton = styled.div`
  width: 250px;
  height: 63px;

  border: 1px solid black;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;
