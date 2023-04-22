import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ViewUser = styled.div`
  width: 1000px;
  height: 100vh;

  box-sizing: border-box;
  background-color: #f6f6f6;

  padding: 50px 135px 50px;
`;

export const CreateUser = styled.form`
  width: 920px;
  height: 100vh;

  padding: 147px 210px 0;
  border: 1px solid blue;
  box-sizing: border-box;
`;

export const VuHeader = styled.div`
  width: 730px;
  display: flex;
  flex-direction: row;

  margin-bottom: 60px;
`;

export const Vubody = styled.div`
  width: 730px;
`;

export const StSpan = styled.span`
  font-size: 15px;
  font-weight: bold;

  padding: 0 15px 15px;
  box-sizing: border-box;

  border-bottom: 1px solid black;
`;

export const UserInfo = styled.span`
  width: 90px;
  height: 50px;
  color: #484240;
  font-size: 12px;

  text-align: center;

  padding: 15px;
  box-sizing: border-box;
`;
