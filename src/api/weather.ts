import {ExtractFnReturnType} from 'providers';
import {weatherServer} from './axios';
import {useQuery} from 'react-query';
import {WEATHER_API_KEY, WEATHER_API_URL} from 'config/api';
import {defer} from 'react-router-dom';
import {City} from 'types/city';

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

  return `${WEATHER_API_URL}timeline/${latitude},${longitude}/${forecastParam}?${new URLSearchParams(
    params
  ).toString()}`;
};

export const getCityWeather = (latitude: number, longitude: number) => {
  const url = buildUrl(latitude, longitude);
  return weatherServer.get(url);
};

type QueryFnType = typeof getCityWeather;

// for using query as hook
export const useCityWeather = (latitude: number, longitude: number, city: string, country: string) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    queryKey: ['weather', city, country],
    queryFn: () => getCityWeather(latitude, longitude),

    enabled: !!(latitude && longitude),
  });
};

export interface CityWeatherLoader {
  cityWeatherPromise: ExtractFnReturnType<QueryFnType>;
}

// for using via react-router loader
export const cityWeatherQuery = () => {
  const city = (JSON.parse(window.sessionStorage.getItem('selectedCity') || '')?.state as City) || undefined;
  return {
    queryKey: ['weather', city?.name, city?.countryName],
    queryFn: () => city && getCityWeather(city.lat, city.lng),
    enabled: !!city,
  };
};

export const cityWeatherLoader = (queryClient) => async () => {
  return defer({
    cityWeatherPromise: queryClient.fetchQuery(cityWeatherQuery()),
  });
};
