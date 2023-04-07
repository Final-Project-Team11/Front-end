import styled from 'styled-components';

export const StVacateBlock = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StSpanBlock = styled.div`
  background-color: azure;
  width: 65%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StVacateSpan = styled.span`
  font-size: 15px;
`;

export const StPermissionBlock = styled.div`
  background-color: green;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;
`;

// export const StTagsSpan = styled.span<CssProps>`
//   ${({ isChecked }) =>
//     isChecked
//       ? css`
//           color: red;
//           font-weight: bolder;
//         `
//       : ''}
//   font-size: 15px;
// `;
