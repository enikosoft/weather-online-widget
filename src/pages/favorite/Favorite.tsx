import {useFavoritesWeather} from 'api/bulkWeather';
import {useFavorite} from 'hooks';
import {mapApiWeatherDataToFavoritesValues} from 'utils/weatherUtils';
import {FavoriteLayout} from './FavoriteLayout';

export const Favorite = () => {
  const [, , cities] = useFavorite();

  const {isLoading, data, isError} = useFavoritesWeather(cities);

  if (isLoading) {
    return <div>Loading.....</div>;
  }

  if (isError) {
    return <div>Error.....</div>;
  }

  const favoritesList = (data && mapApiWeatherDataToFavoritesValues(data?.data, cities)) || [];

  return <FavoriteLayout favorites={favoritesList} />;
};
