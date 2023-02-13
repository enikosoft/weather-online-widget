import {ExtractFnReturnType} from 'providers';
import {weatherServer} from './axios';
import {useQuery} from 'react-query';
import {WEATHER_API_KEY, WEATHER_API_URL} from 'config/api';
import {City} from 'types/city';

const apiParams = (locations: string) => {
  return {
    key: WEATHER_API_KEY,
    unitGroup: 'metric',
    include: 'days,current,obs,noheaders,fcst,nonulls',
    iconSet: 'icons2',
    timezone: 'Z',
    elements:
      'sunsetEpoch,sunriseEpoch,icon,conditions,uvindex,visibility,pressure,winddir,windspeed,snow,dew,humidity,feelslike,temp,datetimeEpoch,tempmax,tempmin,temp,description',
    forecastDays: '1',
    aggregateHours: '24',
    combinationMethod: 'aggregate',
    contentType: 'json',
    locationMode: 'array',
    locations,
    shortColumnNames: 'false',
  };
};

// Doc:  https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
export const buildUrl = (locations: string) => {
  const params = apiParams(locations);

  return `${WEATHER_API_URL}weatherdata/forecast?${new URLSearchParams(params).toString()}`;
};

export const getCityWeather = (locations: string) => {
  const url = buildUrl(locations);
  return weatherServer.get(url);
};

type QueryFnType = typeof getCityWeather;

export const useFavoritesWeather = (cities: City[]) => {
  const locations = cities.map((city) => `${city.lat},${city.lng}`).join('|');
  const citiesNames = cities.map((city) => city.name).join(',');

  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['weather', citiesNames],
    queryFn: () => getCityWeather(locations),
    enabled: !!locations,
  });
};
