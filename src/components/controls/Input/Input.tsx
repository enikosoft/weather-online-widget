import {ChangeEventHandler, FocusEvent, FocusEventHandler} from 'react';

import {SearchIcon} from 'components/icons';
import {withTheme} from 'hoc';
import {ThemeContext, themeStyles} from 'styles';
import {StyledSearchInput, SuffixWrapper} from './styles';

export interface SearchInputProps {
  theme: ThemeContext;
  large?: boolean;
  medium?: boolean;
  searchString: string;
  setSearchString: ChangeEventHandler<HTMLInputElement>;
  autoFocus: boolean;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
  placeholder: string;
  showIcon: boolean;
  showClear: boolean;
}

export const Input = withTheme(
  ({
    large,
    searchString,
    setSearchString,
    autoFocus,
    onFocus,
    placeholder,
    showIcon = true,
    theme,
  }: SearchInputProps) => {
    const handleOnFocus = (event: FocusEvent<HTMLInputElement>) => {
      onFocus && onFocus(event);
    };

    const searchIconColor = large ? 'var(--white)' : themeStyles[theme].color;
    const searchSize = large ? 26 : 16;

    return (
      <StyledSearchInput>
        <input
          type="text"
          spellCheck={false}
          value={searchString}
          onChange={setSearchString}
          onFocus={handleOnFocus}
          placeholder={placeholder}
          autoFocus={autoFocus}
        />
        {showIcon && (
          <SuffixWrapper>
            <SearchIcon color={searchIconColor} width={searchSize} height={searchSize} />
          </SuffixWrapper>
        )}
      </StyledSearchInput>
    );
  }
);
