import {City} from 'types/city';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface State {
  favorites: City[];
  isLiked: (cityId: string) => boolean;
  toggle: (city: City) => void;
}

export const useFavoritesStore = create<State>()(
  persist(
    (set, get) => {
      const favoritesJSON = window.localStorage.getItem('favorites') || '[]';
      const cities = JSON.parse(favoritesJSON) as City[];

      return {
        favorites: cities,
        isLiked: (cityId) => !!get().favorites.find((favorite: City) => favorite.id === cityId),
        toggle: (city) => {
          return set((state) => {
            const alreadyFavorited = state.favorites?.find((favorite) => favorite.id === city?.id);

            return {
              favorites: alreadyFavorited
                ? get().favorites?.filter((favorite) => favorite.id !== alreadyFavorited.id)
                : [...get().favorites, city],
            };
          });
        },
      };
    },
    {
      name: 'favorites',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({favorites: state.favorites}),
    }
  )
);
