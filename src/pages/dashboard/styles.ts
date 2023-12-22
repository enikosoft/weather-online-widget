import styled from 'styled-components';
import {mediaBreakpoints} from 'styles';

export const GridDashboard = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 24px;

  .main-grid-card {
    grid-row: span 2;
  }

  .grid-item {
    min-width: 220px;
    width: auto;
    max-height: 220px;
  }

  .bottom-grid-row {
    grid-column: span 4;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 24px;

    .time-grid-card {
      grid-column: span 3;
    }
  }

  @media screen and (min-width: ${mediaBreakpoints.sm}px) and (max-width: ${mediaBreakpoints.xl}px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 2fr 2fr 2fr 1fr;

    .main-grid-card {
      grid-row: span 4;
      grid-column: span 3;
    }

    .bottom-grid-row {
      grid-column: span 3;

      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;

      .forecast-grid-card {
        grid-column: span 3;
      }
      .time-grid-card {
        height: 500px;
        grid-column: span 3;
      }
    }
  }

  @media screen and (max-width: ${mediaBreakpoints.sm}px) {
    max-height: unset;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .bottom-grid-row {
      grid-column: span 1;
      grid-template-columns: 1fr;

      .forecast-grid-card {
        grid-column: span 3;
      }
      .time-grid-card {
        height: 300px;
        grid-column: span 3;
      }
    }
  }
`;
