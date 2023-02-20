import {City} from 'types/city';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

interface State {
  cityInContext?: City;
  add: (city: City) => void;
  clear: () => void;
}

export const useCityStore = create<State>()(
  persist(
    (set) => {
      return {
        cityInContext: undefined,
        clear: () => ({cityInContext: undefined}),
        add: (city) => {
          return set(() => {
            return {cityInContext: city};
          });
        },
      };
    },
    {
      name: 'selectedCity',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => state.cityInContext,
    }
  )
);
