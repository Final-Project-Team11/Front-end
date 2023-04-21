import styled from 'styled-components';

export const Frame = styled.div`
  /* width: 1920px;
  height: 1080px; */
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const FeedArea = styled.div`
  width: 250px;
  height: 735px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Wrapper = styled.div`
  width: 1200px;
  height: 100%;
  padding-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 31px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1100px;
  height: fit-content;
`;

export const Calendar = styled.div`
  background-color: aliceblue;
  width: 823px;
  height: 113px;
`;

export const MainArea = styled.div`
  width: 1098px;
  height: 748px;

  display: flex;
  gap: 28px;
`;

export const TabArea = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 14px;

  display: flex;
  gap: 20px;
`;

export const MiddleArea = styled.div`
  width: 260px;
  height: 734px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
