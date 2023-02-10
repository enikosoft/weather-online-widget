import {useWeather} from 'api/weather';
import {useCity} from 'hooks';
import {useNavigate} from 'react-router-dom';
import {mapApiWeatherDataToValues} from 'utils/weatherUtils';
import {DashboardLayout} from './DashboardLayout';

export const Dashboard = () => {
  const {city} = useCity();
  const navigate = useNavigate();

  if (!city) {
    navigate('/app/dashboard', {state: {city}});
    return null;
  }

  const {isLoading, data, isError, dataUpdatedAt} = useWeather(city.lat, city.lng, city.name, city.countryCode);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (isError) {
    return <div>Error.....</div>;
  }

  const result = data && mapApiWeatherDataToValues(data.data);

  if (!result || !result.weather) {
    return <div>Error.....</div>;
  }

  return (
    <DashboardLayout dataUpdatedAt={dataUpdatedAt} weather={result.weather} forecast={result.forecast} city={city} />
  );
};
