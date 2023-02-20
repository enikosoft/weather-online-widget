import {CityWeatherLoader, cityWeatherQuery} from 'api/weather';
import {Suspense, useEffect, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import {Await, useLoaderData, useNavigate} from 'react-router-dom';
import {useCityStore} from 'state/city';
import {mapApiWeatherDataToValues} from 'utils/weatherUtils';
import {DashboardLayout} from './DashboardLayout';

export const Dashboard = () => {
  const navigate = useNavigate();

  const [city] = useCityStore((state) => [state.cityInContext]);

  const {cityWeatherPromise} = useLoaderData() as CityWeatherLoader;

  useEffect(() => {
    console.log('Dashboard useEffect ---------->');
    if (!city) {
      navigate('/', {replace: true});
    }
  }, []);

  useLayoutEffect(() => {
    console.log('Dashboard useLayoutEffect ---------->');
  }, []);

  console.log('Dashboard  RENDER ---------->');

  return city ? (
    <Suspense fallback={<p style={{background: 'green'}}>RRRRRRRRRRR</p>}>
      <Await resolve={cityWeatherPromise} errorElement={<div>Oops!</div>}>
        {(data) => {
          const result = data && mapApiWeatherDataToValues(data?.data);

          const {dataUpdatedAt} = useQuery(cityWeatherQuery());
          return (
            <DashboardLayout
              dataUpdatedAt={dataUpdatedAt}
              weather={result.weather}
              forecast={result.forecast}
              city={city}
            />
          );
        }}
      </Await>
    </Suspense>
  ) : null;
};
