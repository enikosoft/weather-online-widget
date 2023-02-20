import {FavoriteLoader} from 'api/bulkWeather';
import {Suspense, useEffect} from 'react';
import {Await, useLoaderData} from 'react-router-dom';
import {mapApiWeatherDataToFavoritesValues} from 'utils/weatherUtils';
import {FavoriteLayout} from './FavoriteLayout';
import {useFavoritesStore} from 'state';

export const Favorite = () => {
  const favorites = useFavoritesStore((state) => state.favorites);

  const {favoritesPromise} = useLoaderData() as FavoriteLoader;

  useEffect(() => {
    console.log('Favorite USE EFFECT******');
  }, []);

  console.log('Favorite RENDER******');

  return (
    <Suspense fallback={<p style={{background: 'green'}}>RRRRRRRRRRR</p>}>
      <Await resolve={favoritesPromise} errorElement={<div>Oops!</div>}>
        {(data) => {
          const favoritesList = (data && mapApiWeatherDataToFavoritesValues(data?.data, favorites)) || [];

          return <FavoriteLayout favorites={favoritesList} />;
        }}
      </Await>
    </Suspense>
  );
};
