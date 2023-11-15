import {Col, Row} from 'antd';
import {P} from 'components/layout';
import {ConditionIcon} from 'components/lib';
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
        <Col span={4} className="forecast-icon">
          <ConditionIcon height={40} width={40} className="condition_icon" condition={item.conditionIcon} />
        </Col>
        <Col span={6} className="forecast-temperature">
          {item.maxTemp}°C/<P>{item.minTemp}</P>
        </Col>
        <Col span={6} className="forecast-date">
          <P>{item.date}</P>
        </Col>
        <Col span={8} className="forecast-day">
          <P>{item.day}</P>
        </Col>
      </Row>
    </Item>
  );
};
