import styled from 'styled-components';
import { UlStyleProps } from './interfaces';

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLiBlock = styled.li`
  padding: 5px 0 5px 5px;
  display: flex;
  gap: 10px;
  font-size: 15px;

  &:hover {
    background-color: #3595f6;
    color: white;
  }
`;

const StProfileBlock = styled.div`
  display: flex;
  gap: 5px;
`;
const StImageBlock = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: tomato;
`;

const StTagBlock = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  margin: 5px 0 5px 5px;
  border-radius: 5px;
  padding: 0.3em 0.5em;
  font-weight: bold;
  gap: 10px;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    background-color: #d3e2e2;
  }
`;

const StDeleteBlock = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #f17272;
  }
`;

const StInputBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  line-height: 20px;
  min-width: 600px;
  max-width: 700px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const StTeamMark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 5px 0;
  background-color: #00ce8d;
  width: 70px;
  height: 25px;
  font-size: 0.9em;
  font-weight: 600;
  font-style: italic;
  color: white;
`;

const StInput = styled.input`
  flex-grow: 1;
  font-size: 20px;
  outline: none;
  border: none;
  box-sizing: border-box;

  &:disabled {
    background-color: white;
  }
`;

const StUlBlock = styled.ul<UlStyleProps>`
  position: absolute;
  z-index: 2000;
  background-color: white;
  /* border: 1px solid black; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-top: none;
  ${({ pos }) =>
    `top : ${pos.top + pos.height}px; left :${pos.left}px; width:${pos.width}px;`}
`;

const StIconBlock = styled.div`
  padding-top: 7px;
  margin-right: 26px;
`;

export {
  StContainer,
  StLiBlock,
  StProfileBlock,
  StImageBlock,
  StTagBlock,
  StDeleteBlock,
  StInputBlock,
  StTeamMark,
  StInput,
  StUlBlock,
  StIconBlock,
};
