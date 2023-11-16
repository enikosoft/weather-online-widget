import {ChangeEvent, useCallback} from 'react';
import {City} from 'types/city';
import {mapDataToCity, mapDataToOptions} from 'utils/citiesUtils';
import ReactSearchAutocomplete from 'components/controls/Select/ReactSearchAutocomplete';
import {DefaultSelectTheme} from 'components/controls/Select/styles';
import usePlacesAutocomplete, {getDetails} from 'use-places-autocomplete';

interface Props {
  mobileAndTablet?: boolean
  showInputSearchIcon?: boolean
  large?: boolean;
  medium?: boolean;
  styling?: DefaultSelectTheme;
  onSelect: (city: City) => void;
}

export const CitySelect = (props: Props) => {
  const {large, medium, onSelect, styling, showInputSearchIcon} = props;

  const {
    ready,
    value,
    setValue,
    suggestions: {status, data},
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // types: ['locality', 'political', 'geocode'],
      // language: 'en',
    },

    debounce: 500,
  });

  // get place details from Google autocomplete
  const getCityDetails = useCallback(async (placeId: string) => {
    const parameter = {
      placeId,
      fields: ['place_id', 'geometry', 'address_components', 'photos', 'utc_offset_minutes', 'timezone'],
    };

    return getDetails(parameter);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSelect = async (option) => {
    try {
      const details = await getCityDetails(option.key);

      const city = await mapDataToCity(details);

      if (city) {
        onSelect(city);
        clearSuggestions();

        return;
      }

      // @TODO: add inform that city details is unavailable
    } catch (e) {
      console.error(e);
    }
  };

  const options = mapDataToOptions(data);
  const showNoResults = status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS;

  return (
    <ReactSearchAutocomplete
      medium={medium}
      large={large}
      styling={styling}
      items={options}
      onSearch={handleSearch}
      onSelect={handleSelect}
      autoFocus
      placeholder="Type here"
      inputSearchString={value}
      isLoading={!ready}
      showNoResults={showNoResults}
      showIcon={showInputSearchIcon}
    />
  );
};

export default CitySelect;
