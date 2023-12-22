import {Option} from 'components/controls/Option';
import {withTheme} from 'hoc';
import {ChangeEvent, FocusEvent, FocusEventHandler, KeyboardEvent, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {ThemeProps} from 'styles';
import {Input} from '../Input';
import Results from './Results';
import {DefaultSelectTheme, getSelectStyles, StyledReactSearchAutocomplete} from './styles';

export interface ReactSearchAutocompleteProps extends ThemeProps {
  large?: boolean;
  medium?: boolean;
  items: Option[];
  inputSearchString?: string;
  showIcon?: boolean;
  showClear?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  styling?: DefaultSelectTheme;
  showNoResults?: boolean;
  showNoResultsText?: string;
  isLoading?: boolean;
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onSelect: (item: Option) => void;
  onHover?: (item: Option) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
}

const ReactSearchAutocomplete = ({
  items = [],
  large,
  medium,
  onSearch,
  onSelect,
  onFocus,
  onClear,
  showIcon = true,
  showClear = true,
  placeholder = '',
  autoFocus = false,
  styling = {},
  inputSearchString = '',
  showNoResults = true,
  showNoResultsText = 'No results',
  theme,
}: ReactSearchAutocompleteProps) => {
  const styles = getSelectStyles(theme, large);

  const [searchString, setSearchString] = useState<string>(inputSearchString);
  const [highlightedItem, setHighlightedItem] = useState<number>(-1);

  const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event);
  };

  const handleSetSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setSearchString(keyword);
    onSearch(e);
  };

  const handleSetHighlightedItem = ({index}: {index?: number; event?: KeyboardEvent<HTMLInputElement>}) => {
    if (index !== undefined) {
      setHighlightedItem(index);
    }
  };

  return (
    <ThemeProvider theme={{...styles, ...styling, large}}>
      <StyledReactSearchAutocomplete>
        <div className="wrapper">
          <Input
            theme={theme}
            large={large}
            medium={medium}
            searchString={searchString}
            setSearchString={handleSetSearchString}
            autoFocus={autoFocus}
            onFocus={handleOnFocus}
            onClear={onClear}
            placeholder={placeholder}
            showIcon={showIcon}
            showClear={showClear}
          />

          <Results
            results={items}
            onClick={onSelect}
            setSearchString={setSearchString}
            showIcon={showIcon}
            highlightedItem={highlightedItem}
            setHighlightedItem={handleSetHighlightedItem}
            showNoResultsFlag={showNoResults}
            showNoResultsText={showNoResultsText}
          />
        </div>
      </StyledReactSearchAutocomplete>
    </ThemeProvider>
  );
};

export default withTheme(ReactSearchAutocomplete);
