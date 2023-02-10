import {Col, Row} from 'antd';
import {WeatherConditionIcon} from 'components/icons';
import {Forecast} from 'types/weather';
import {Item} from './styles';

interface Props {
  item: Forecast;
}
export const ForecastItem = (props: Props) => {
  const {item} = props;
  return (
    <Item>
      <Row justify="space-between" className="forecast">
        <Col span={3} className="forecast-icon">
          <WeatherConditionIcon height={55} width={55} className="condition_icon" condition={item.conditionIcon} />
        </Col>
        <Col span={7} className="forecast-temperature">
          {item.maxTemp}°C/<span>{item.minTemp}</span>
        </Col>
        <Col span={6} className="forecast-date">
          {item.date}
        </Col>
        <Col span={8} className="forecast-day">
          {item.day}
        </Col>
      </Row>
    </Item>
  );
};
