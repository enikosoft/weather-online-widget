import {Card} from 'components/layout';
import {
  CurrentTime,
  FeelsLikeTemperature,
  Forecast,
  Humidity,
  SunSet,
  Temperature,
  UVIndex,
  Visibility,
  Wind,
} from 'pages/dashboard';
import {City} from 'types/city';
import {Forecast as ForecastType, Weather} from 'types/weather';
import {GridDashboard} from './styles';

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
    <GridDashboard>
      <div className="main-grid-card">
        {' '}
        <Card padding={40}>
          <Temperature
            temperature={temperature}
            conditions={conditions}
            description={description}
            icon={icon}
            dataUpdatedAt={dataUpdatedAt}
          />
        </Card>
      </div>
      <div className="grid-item ">
        <Card titleSize={16} title="Wind Status" padding={24}>
          <Wind windSpeed={windspeed} windDir={winddir} />
        </Card>
      </div>
      <div className="grid-item ">
        <Card titleSize={16} title="UV Index" padding={24}>
          <UVIndex uvIndex={uvindex} />
        </Card>
      </div>
      <div className="grid-item ">
        <Card titleSize={16} title="Sunrise & Sunset" padding={24}>
          <SunSet
            timeZoneId={timezone.timeZoneId}
            sunsetUnix={sunsetEpoch}
            sunriseUnix={sunriseEpoch}
            size={150}
            sunIconSize={25}
          />
        </Card>
      </div>

      <div className="grid-item ">
        <Card titleSize={14} title="Humidity" padding={16}>
          <Humidity humidity={humidity} dew={dew} />
        </Card>
      </div>
      <div className="grid-item ">
        {' '}
        <Card titleSize={14} title="Visibility" padding={16}>
          <Visibility visibility={visibility} />
        </Card>
      </div>
      <div className="grid-item ">
        {' '}
        <Card titleSize={14} title="Feels Like" padding={16}>
          <FeelsLikeTemperature feelsLike={feelslike} />
        </Card>
      </div>

      <div className="bottom-grid-row">
        <div className="forecast-grid-card">
          <Forecast forecast={forecast} />
        </div>
        <div className="time-grid-card" style={{position: 'relative'}}>
          <Card padding={0}>
            <CurrentTime cityPhotos={photos} />
          </Card>
        </div>
      </div>
    </GridDashboard>
  );
};
