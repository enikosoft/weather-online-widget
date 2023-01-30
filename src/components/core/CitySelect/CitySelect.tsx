import React, {ChangeEvent, useEffect, useState} from 'react';
import {useSearchDebouncedText} from 'hooks/useSearchDebouncedText';
import {City} from 'types/city';
import {DEFAULT_LIMIT, DEFAULT_OFFSET} from './utils';
import {useCities} from 'api/cities';
import {mapDataToOptions} from 'utils/citiesUtils';
import ReactSearchAutocomplete from 'components/controls/Select/ReactSearchAutocomplete';
import {Option} from 'components/controls/Option';
import {DefaultSelectTheme} from 'components/controls/Select/styles';

interface Props {
  large?: boolean;
  medium?: boolean;
  styling?: DefaultSelectTheme;
  onSelect: (option: Option) => void;
}

export const CitySelect = (props: Props) => {
  const {large, medium, onSelect, styling} = props;

  // state of fetched cities
  const [cities, setCities] = useState<City[]>([]);

  const [offset, setOffset] = useState<number>(DEFAULT_OFFSET);

  const resetSearchResult = () => {
    setOffset(DEFAULT_OFFSET);
    setCities([]);
  };

  // debounced input value
  const [inputStr, setSearchStr] = useSearchDebouncedText(500, resetSearchResult);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearchStr(event.target.value);

  // fetch cities
  const result = useCities(inputStr, DEFAULT_LIMIT, offset);

  const fetchedData = result?.data?.data;
  const items = fetchedData?.items as City[];
  const hasNextPage = !!fetchedData?.hasNextPage;

  // update cities state after refetching data
  useEffect(() => {
    if (items) setCities([...cities, ...items]);
  }, [items]);

  const options = mapDataToOptions(cities);

  // load more after scrolling dropdown
  const onLoadMore = () => {
    if (hasNextPage) setOffset(offset + DEFAULT_LIMIT);
  };

  return (
    <ReactSearchAutocomplete
      medium={medium}
      large={large}
      styling={styling}
      items={options}
      onSearch={handleSearch}
      onSelect={onSelect}
      autoFocus
      placeholder="Type here"
      inputSearchString={inputStr}
      isLoading={result.isLoading}
      onLoadMore={onLoadMore}
      showNoResults={!!inputStr.length && !cities.length}
    />
  );
};

export default CitySelect;
