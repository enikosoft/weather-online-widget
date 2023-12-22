import {Col, Row} from 'antd';
import {DateTime} from 'luxon';

import {ConditionIcon} from 'components/lib';

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

  const currentTime = DateTime.fromJSDate(new Date(dataUpdatedAt));

  const lastUpdatedTime = currentTime.toFormat('h:mm a');
  const lastUpdatedDate = currentTime.toFormat('dd LLL, yyyy');

  console.log('item', conditions, icon);
  temperature;
  return (
    <Wrapper>
      <Row>
        <Col>
          <div className="temperature">{temperature} °C</div>
          <div className="conditions">{conditions}</div>
          <div className="description">{description}</div>
        </Col>
        <Col>
          <ConditionIcon height={200} width={200} className="condition_icon" condition={icon} />
        </Col>
      </Row>
      <Row className="updatedAt">
        <div>Last update: </div>
        <div className="updatedAt-date">{lastUpdatedDate}</div>
        <div className="updatedAt-time">{lastUpdatedTime}</div>
      </Row>
    </Wrapper>
  );
};
