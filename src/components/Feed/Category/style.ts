import styled, { css } from 'styled-components';
import { COLOR } from '../../../styles/colors';
interface CategoryStyle {
  tab: boolean;
}

export const StCategoryBlock = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  gap: 11px;
  padding-left: 10px;
  box-sizing: border-box;
  margin-bottom: 36px;
`;

export const StCategoryWrapper = styled.div`
  width: 100%;
  height: fit-content;

  margin-bottom: 11px;

  display: flex;
  align-items: center;
  &:hover .deleteBlock {
    opacity: 1;
  }
`;

export const StDeleteBlock = styled.div`
  font-size: 18px;
  color: ${COLOR.PAGE_DONE};

  display: flex;

  margin-left: auto;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

export const StCategoryTitleBlock = styled.div<CategoryStyle>`
  background-color: ${COLOR.PAGE_BLUE};

  ${({ tab }) =>
    tab === false
      ? css`
          background-color: ${COLOR.SCHEDULE_BLUE};
        `
      : css`
          background-color: ${COLOR.VACATION_RED};
        `}
  width: fit-content;
  max-width: 155px;
  height: 26px;

  padding-left: 7px;
  padding-right: 7px;

  box-sizing: border-box;
  border-radius: 13px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  gap: 5px;
`;

export const StCategoryH3 = styled.span`
  padding-top: 2px;

  font-size: 12px;

  color: ${COLOR.PAGE_WHITE};
  display: flex;
  align-items: center;
`;

export const StCircleBlock = styled.div`
  background-color: ${COLOR.PAGE_WHITE};

  width: 13px;
  height: 13px;
  border-radius: 50%;
`;

export const StPlusBlock = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  font-weight: lighter;
  color: ${COLOR.PAGE_DONE};
  cursor: pointer;
`;

// styles for AddCategory
export const StCategoryInputBlock = styled.div<CategoryStyle>`
  background-color: ${COLOR.PAGE_BLUE};

  ${({ tab }) =>
    tab === false
      ? css`
          background-color: ${COLOR.SCHEDULE_BLUE};
        `
      : css`
          background-color: ${COLOR.VACATION_RED};
        `}

  width: fit-content;
  height: 26px;

  padding-left: 7px;
  padding-right: 7px;

  box-sizing: border-box;
  border-radius: 13px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 5px;
`;

export const StCategoryInput = styled.input`
  width: 150px;
  height: 26px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 12px;
  outline: none;
`;
/////////////////////////////////
