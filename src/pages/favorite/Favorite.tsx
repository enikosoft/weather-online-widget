import {FavoriteLoader} from 'api/bulkWeather';
import {Suspense} from 'react';
import {Await, useLoaderData} from 'react-router-dom';
import {mapApiWeatherDataToFavoritesValues} from 'utils/weatherUtils';
import {FavoriteLayout} from './FavoriteLayout';
import {useFavoritesStore} from 'state';
import {LoaderIndicatorEarth} from 'components/layout';

export const Favorite = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  const {favoritesPromise} = useLoaderData() as FavoriteLoader;

  return (
    <Suspense fallback={<LoaderIndicatorEarth />}>
      <Await resolve={favoritesPromise} errorElement={<div>Oops!</div>}>
        {(data) => {
          const favoritesList = (data && mapApiWeatherDataToFavoritesValues(data?.data, favorites)) || [];

          return <FavoriteLayout favorites={favoritesList} />;
        }}
      </Await>
    </Suspense>
  );
};
