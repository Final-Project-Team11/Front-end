import styled from 'styled-components';

export const StImg = styled.img`
  object-fit: cover;
`;

export const StBlock = styled.div`
  width: 100vw;
  height: 100vh;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StButton = styled.button`
  margin: 30px 30px 0 0;
  width: 200px;
  height: 80px;
  border-radius: 15px;
  background-color: #e64042;
  border: none;
  font-weight: bold;
  font-size: 20px;
  color: white;

  cursor: pointer;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
`;
