import React from 'react';
import {Option} from 'components/controls/Option';
import {CitySelect, ToggleThemeButton} from 'components/core';
import {CityTitle} from './CityTitle';
import {CitySelectWrapper, StyledHeader} from './style';

const Header = ({switchThema}) => {
  const handleSelect = (data: Option) => {
    const city = JSON.parse(data.value.toString());
    console.log('Selected city:', city.name);
  };

  return (
    <StyledHeader>
      <CityTitle />

      <CitySelectWrapper>
        <CitySelect medium onSelect={handleSelect} />
      </CitySelectWrapper>
      <ToggleThemeButton switchThema={switchThema} />
    </StyledHeader>
  );
};

export default Header;
