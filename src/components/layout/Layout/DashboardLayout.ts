import {Row} from 'antd';
import styled from 'styled-components';
import {size} from 'styles/GlobalStyle';

export const MainRow = styled(Row)`
  min-height: 350px;

  @media ${size.sm} {
    flex-direction: column;
  }

  @media ${size.xl} {
    flex-direction: row;
  }
`;
