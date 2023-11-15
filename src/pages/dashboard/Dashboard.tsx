import {Suspense, useEffect} from 'react';
import {useQuery} from 'react-query';
import {Await, useLoaderData, useNavigate} from 'react-router-dom';
import {CityWeatherLoader, cityWeatherQuery} from 'api/weather';
import {LoaderIndicatorWinter} from 'components/layout';
import {useCityStore} from 'state/city';
import {mapApiWeatherDataToValues} from 'utils/weatherUtils';
import {DashboardLayout} from './DashboardLayout';

export const Dashboard = () => {
  const navigate = useNavigate();

  const [city] = useCityStore((state) => [state.cityInContext]);

  const {cityWeatherPromise, cityTimeZonePromise} = useLoaderData() as CityWeatherLoader;

  useEffect(() => {
    if (!city) {
      navigate('/', {replace: true});
    }
  }, []);

  return city ? (
    <Suspense fallback={<LoaderIndicatorWinter />}>
      <Await resolve={[cityWeatherPromise, cityTimeZonePromise]} errorElement={<div>Oops!</div>}>
        {() => {
          const {dataUpdatedAt, data, isLoading} = useQuery(cityWeatherQuery());
          const result = data && mapApiWeatherDataToValues(data?.data);

          if (isLoading) return <LoaderIndicatorWinter />;
          if (!result) return null;

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
