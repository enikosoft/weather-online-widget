import moment from 'moment';
import {Forecast, Weather} from 'types/weather';

export const mapApiWeatherDataToValues = (data): {weather: Weather; forecast: Forecast[]} => {
  const fetchedCurrentConditions = data.currentConditions;

  const weather = {
    ...fetchedCurrentConditions,
    temperature: Math.floor(Math.round(fetchedCurrentConditions.temp)),
    feelslike: Math.floor(Math.round(fetchedCurrentConditions.feelslike)),
    dew: Math.floor(Math.round(fetchedCurrentConditions.dew)),
    description: data.description,
  };

  const forecast = data.days.slice(1).map((day) => {
    return {
      maxTemp: Math.floor(Math.round(day.tempmax)),
      minTemp: Math.floor(Math.round(day.tempmin)),
      date: moment.unix(day.datetimeEpoch).format('DD MMM'),
      day: moment.unix(day.datetimeEpoch).format('dddd'),
      conditionIcon: day.icon,
    };
  });

  return {weather, forecast};
};
