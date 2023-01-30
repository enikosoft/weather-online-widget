import {Option} from 'components/controls/Option';
import {City} from 'types/city';

export const mapDataToOptions = (cities: City[]): Option[] => {
  return cities?.map((city: City) => {
    return {
      key: Number(city.id),
      label: `${city.name}, ${city.country.name}`,
      id: Number(city.id),
      name: `${city.name}, ${city.country.name}`,
      value: JSON.stringify(city),
    };
  });
};
