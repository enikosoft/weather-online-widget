import styled from 'styled-components';

export const StyledOption = styled.li`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 55px;
  height: 48px;

  &:hover {
    cursor: pointer;
  }

  &.ellipsis {
    text-align: left;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.selected {
    color: var(--primary-blue);
  }
`;
