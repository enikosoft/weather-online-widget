import weatherSpinner from 'assets/images/weatherSpinner.gif';
import styled from 'styled-components';

// https://icons8.com/preloaders/en/weather_conditions/winter/

const Loader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;

  .spinner {
    background: url(${weatherSpinner});
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    vertical-align: middle;
    align-items: center;
    width: 60px;
    height: 60px;
  }
`;

export const LoaderIndicatorWinter = () => {
  return (
    <Loader>
      <div className="spinner"></div>
    </Loader>
  );
};
