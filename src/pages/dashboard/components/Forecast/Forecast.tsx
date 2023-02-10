import {Card} from 'components/layout/Card';
import {Forecast as ForecastType} from 'types/weather';
import {ForecastItem} from './ForecastItem';
import {Wrapper} from './styles';

export const Forecast = ({forecast}: {forecast: ForecastType[]}) => {
  return (
    <Wrapper>
      <div className="forecast-controls">
        <div className="period-title">7 day Forecast</div>
      </div>

      <Card padding={40}>
        {forecast.map((item, key) => (
          <ForecastItem key={key} item={item} />
        ))}
      </Card>
    </Wrapper>
  );
};
