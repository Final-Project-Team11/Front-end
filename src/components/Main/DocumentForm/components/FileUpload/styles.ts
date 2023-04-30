import styled from 'styled-components';

const StTagBlock = styled.div`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  margin: 5px 0 5px 5px;
  border-radius: 5px;
  padding: 0.3em 0.5em;
  font-weight: bold;
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

export { StTagBlock, StInput, StPlusLabel, StContainer, StFileListBlock, StIconBlock };
