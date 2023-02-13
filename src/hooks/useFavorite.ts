import {useEffect, useState} from 'react';
import {City} from 'types/city';

export const useFavorite = (city?: City): [boolean, () => void, City[]] => {
  const [liked, setLiked] = useState<boolean>(false);
  const [favoritesList, setFavoritesList] = useState<City[]>([]);

  const favoritesJSON = window.localStorage.getItem('favorites') || '[]';
  const favorites = JSON.parse(favoritesJSON) as City[];
  const likedAlready = favorites.find((favorite) => favorite.name === city?.name || favorite.id === city?.id);

  const toggleFavorite = (): void => {
    window.localStorage.setItem('favorites', JSON.stringify([city]));

    if (likedAlready) {
      window.localStorage.setItem(
        'favorites',
        JSON.stringify(favorites.filter((favorite) => favorite.id !== likedAlready.id))
      );
      setLiked(false);
    } else {
      window.localStorage.setItem('favorites', JSON.stringify([...favorites, city]));
      setLiked(true);
    }
  };

  useEffect(() => {
    setFavoritesList(favorites);
    setLiked(!!likedAlready);
  }, []);

  useEffect(() => {
    setFavoritesList(favorites);
  }, [liked]);

  return [liked, toggleFavorite, favoritesList];
};
