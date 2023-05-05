import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  margin: auto;
`;

export const ViewUserArea = styled.div`
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

export const StSpan = styled.span`
  font-size: 15px;
  font-weight: bold;

  padding: 0 15px 15px;
  box-sizing: border-box;

  border-bottom: 1px solid black;
`;

export const UserHead = styled.span`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;
  font-weight: bolder;

  box-sizing: border-box;
`;

export const UserInfo = styled.div`
  width: 80px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 15px;

  font-size: 12px;
  box-sizing: border-box;
`;

export const Wrapper_Space = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StFrom = styled.form`
  width: 500px;
  margin: 50px 210px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StH1 = styled.h1`
  width: 710px;
  font-size: 18px;
  font-weight: bolder;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  box-sizing: border-box;
  margin-bottom: 25px;
`;

export const SearchWrapper = styled.div`
  position: relative;

  .searchIcon {
    font-size: 20px;
    position: absolute;
    right: 8px;
    top: 5px;
  }
`;

export const VaildP = styled.p`
  font-size: 13px;
  color: ${COLOR.POINT_C};
  margin: -15px 0;
  font-weight: bold;
`;
