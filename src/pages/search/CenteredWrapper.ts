import styled from 'styled-components';
import {mediaBreakpoints} from 'styles';

export const CenteredWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 520px;

  @media screen and (max-width: ${mediaBreakpoints.md}px) {
    top: 45%;
  }

  > div {
    max-width: inherit;
  }
`;
