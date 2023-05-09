import styled from 'styled-components';

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

const StInput = styled.input`
  display: none;
`;

const StPlusLabel = styled.label`
  color: #dddddd;

  &:hover {
    color: #b1b1b1;
  }
`;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StFileListBlock = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const StIconBlock = styled.div``;

export {
  StTagBlock,
  StInput,
  StPlusLabel,
  StContainer,
  StFileListBlock,
  StIconBlock,
  StDeleteBlock,
};
