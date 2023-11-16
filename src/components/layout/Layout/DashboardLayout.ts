import {Row} from 'antd';
import styled from 'styled-components';
import {mediaBreakpoints} from 'styles';

export const MainRow = styled(Row)`
  min-height: 350px;

  @media ${mediaBreakpoints.sm} {
    flex-direction: column;
  }

  @media ${mediaBreakpoints.xl} {
    flex-direction: row;
  }
`;
