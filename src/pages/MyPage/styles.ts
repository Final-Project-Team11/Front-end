import styled from 'styled-components';

export const Frame = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 31px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1215px;
  height: fit-content;
`;

export const MainArea = styled.div`
  width: 1215px;
  height: 748px;

  display: flex;
  gap: 43px;
`;

export const FeedArea = styled.div`
  width: 250px;
  height: 735px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 16px;
`;

export const TabArea = styled.div`
  width: 100%;
  height: 735px;

  margin-top: 14px;

  display: flex;
  gap: 50px;
`;

export const MiddleArea = styled.div`
  width: 260px;
  height: 735px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
