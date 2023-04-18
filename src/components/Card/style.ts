import styled from 'styled-components';

export const StCardBlock = styled.div`
  background-color: #badaff;

  width: 260px;
  height: 120px;

  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  text-shadow: 0px 1px 9px rgba(212, 229, 249, 1);
`;

export const StInfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  color: white;

  gap: 10px;
`;

export const StTeamNameH1 = styled.h1`
  font-size: 1.2em;
  margin-top: 10px;
  font-weight: bold;
`;

export const StDateBlock = styled.div`
  height: 65px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StInfoSpan = styled.span`
  font-size: 15px;
`;

export const StProfileBlock = styled.div`
  background-color: black;
  width: 80px;
  height: 80px;
  margin-left: auto;

  border-radius: 50%;
`;
