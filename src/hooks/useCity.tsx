import {useOutletContext} from 'react-router-dom';
import {City} from 'types/city';

type ContextType = {
  city: City | null;
  setCity: React.Dispatch<React.SetStateAction<City | undefined>>;
};

export function useCity() {
  return useOutletContext<ContextType>();
}
