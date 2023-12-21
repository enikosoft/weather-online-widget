import {Col, Row} from 'antd';
import {Forecast as ForecastType, Weather} from 'types/weather';
import {Card, MainRow} from 'components/layout';
import {
  CurrentTime,
  FeelsLikeTemperature,
  Forecast,
  Humidity,
  Temperature,
  UVIndex,
  Visibility,
  Wind,
  SunSet,
} from 'pages/dashboard';
import {City} from 'types/city';

interface Props {
  weather: Weather;
  forecast: ForecastType[];
  dataUpdatedAt: number;
  city: City;
}

export const DashboardLayout = (props: Props) => {
  const {weather, forecast, dataUpdatedAt, city} = props;
  const {
    temperature,
    conditions,
    icon,
    description,
    winddir,
    windspeed,
    uvindex,
    sunriseEpoch,
    sunsetEpoch,
    humidity,
    dew,
    visibility,
    feelslike,
  } = weather;

  const {photos, timezone} = city;

  return (
    <>
      <MainRow className='AA'>
        <Col className='temperature-block' span={8} xl={8} xs={20} md={24} sm={24} style={{padding: '20px 20px 0 0'}}>
          <Card padding={40}>
            <Temperature
              temperature={temperature}
              conditions={conditions}
              description={description}
              icon={icon}
              dataUpdatedAt={dataUpdatedAt}
            />
          </Card>
        </Col>
        <Col className='weather-widgets-block' span={24} xl={16} xs={20} md={24} sm={24}>
          <Row className='weather-widgets-block-1'>
            <Col span={8} xl={8} xs={24} md={8} sm={24}>
              <Card titleSize={16} title="Wind Status" padding={24}>
                <Wind windSpeed={windspeed} windDir={winddir} />
              </Card>
            </Col>
            <Col span={8} xl={8} xs={24} md={8} sm={24}>
              <Card titleSize={16} title="UV Index" padding={24}>
                <UVIndex uvIndex={uvindex} />
              </Card>
            </Col>
            <Col span={8} xl={8} xs={24} md={8} sm={24}>
              <Card titleSize={16} title="Sunrise & Sunset" padding={24}>
                <SunSet timeZoneId={timezone.timeZoneId} sunsetUnix={sunsetEpoch} sunriseUnix={sunriseEpoch} size={150} sunIconSize={25} />
              </Card>
            </Col>
          </Row>
          <Row className='weather-widgets-block-2'>
            <Col span={8} xl={8} xs={24} md={8} sm={24}>
              <Card titleSize={14} title="Humidity" padding={16} height={100}>
                <Humidity humidity={humidity} dew={dew} />
              </Card>
            </Col>
            <Col span={8} xl={8} xs={24} md={8} sm={24}>
              <Card titleSize={14} title="Visibility" padding={16} height={100}>
                <Visibility visibility={visibility} />
              </Card>
            </Col>
            <Col span={8} xl={8} xs={24} md={8} sm={24}>
              <Card titleSize={14} title="Feels Like" padding={16} height={100}>
                <FeelsLikeTemperature feelsLike={feelslike} />
              </Card>
            </Col>
          </Row>
        </Col>
      </MainRow>

      {/* <Row style={{minHeight: 'calc(100% - 350px)'}}>
        <Col span={8} xl={8} md={12} xs={24} style={{padding: '40px 20px 0 0'}}>
          <Forecast forecast={forecast} />
        </Col>
        <Col span={16} xl={16} md={12} xs={24} style={{padding: '40px 0 0 20px'}}>
          <Card padding={0}>
            <CurrentTime cityPhotos={photos} />
          </Card>
        </Col>
      </Row> */}
    </>
  );
};
