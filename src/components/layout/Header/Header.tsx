import {CitySelect, ToggleThemeButton} from 'components/core';
import {CityTitle} from './CityTitle';
import {CitySelectWrapper, StyledHeader} from './style';
import {City} from 'types/city';

const Header = ({switchThema, selectCity, city}) => {
  const handleSelect = (item: City) => {
    selectCity(item);
  };

  return (
    <StyledHeader>
      {city && <CityTitle city={city} />}

      <CitySelectWrapper>
        <CitySelect medium onSelect={handleSelect} />
      </CitySelectWrapper>
      <ToggleThemeButton switchThema={switchThema} />
    </StyledHeader>
  );
};

export default Header;
