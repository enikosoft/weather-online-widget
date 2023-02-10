import {Col, Row} from 'antd';
import {WeatherConditionIcon} from 'components/icons';
import moment from 'moment';
import {Wrapper} from './styles';

interface Props {
  temperature: number;
  conditions: string;
  icon: string;
  dataUpdatedAt: number;
  description?: string;
}

export const Temperature = (props: Props) => {
  const {temperature, conditions, icon, description, dataUpdatedAt} = props;

  const lastUpdatedTime = moment(dataUpdatedAt).format('h:mm A');
  const lastUpdatedDate = moment(dataUpdatedAt).format('DD MMM, YYYY');

  return (
    <Wrapper>
      <Row>
        <Col>
          <div className="temperature">{temperature} °C</div>
          <div className="conditions">{conditions}</div>
          <div className="description">{description}</div>
        </Col>
        <Col>
          <WeatherConditionIcon height={150} width={200} className="condition_icon" condition={icon} />
        </Col>
      </Row>
      <Row className="updatedAt">
        <div className="updatedAt-date">{lastUpdatedDate}</div>
        <div className="updatedAt-time">{lastUpdatedTime}</div>
      </Row>
    </Wrapper>
  );
};
