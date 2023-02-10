import {ExtractFnReturnType} from 'providers';
import {weatherServer} from './axios';
import {useQuery} from 'react-query';
import {WEATHER_API_KEY, WEATHER_API_URL} from 'config/api';

const apiParams = () => {
  return {
    key: WEATHER_API_KEY,
    unitGroup: 'metric',
    include: 'days,current,obs,noheaders,fcst,nonulls',
    iconSet: 'icons2',
    timezone: 'Z',
    elements:
      'sunsetEpoch,sunriseEpoch,icon,conditions,uvindex,visibility,pressure,winddir,windspeed,snow,dew,humidity,feelslike,temp,datetimeEpoch,tempmax,tempmin,temp,description',
  };
};

// Doc:  https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/
export const buildUrl = (latitude: number, longitude: number, forecastParam = 'next7days') => {
  const params = apiParams();

  return `${WEATHER_API_URL}${latitude},${longitude}/${forecastParam}?${new URLSearchParams(params).toString()}`;
};

export const getWeather = (latitude: number, longitude: number) => {
  const url = buildUrl(latitude, longitude);
  return weatherServer.get(url);
};

type QueryFnType = typeof getWeather;

export const useWeather = (latitude: number, longitude: number, city: string, country: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['weather', city, country],
    queryFn: () => getWeather(latitude, longitude),

    enabled: !!(latitude && longitude),
  });
};
