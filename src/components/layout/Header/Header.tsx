import {CitySelect, ToggleThemeButton} from 'components/core';
import {CityTitle} from './CityTitle';
import {CitySelectWrapper, StyledHeader} from './style';
import {City} from 'types/city';
import {useJsApiLoader} from '@react-google-maps/api';
import {GOOGLE_API_KEY} from 'config/api';

const Header = ({switchThema, selectCity, city}) => {
  const handleSelect = (item: City) => {
    selectCity(item);
  };

  const {isLoaded, loadError} = useJsApiLoader({
    libraries: ['places'],
    language: 'en',
    preventGoogleFontsLoading: true,
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  return (
    <StyledHeader>
      {city && <CityTitle city={city} />}

      <CitySelectWrapper>{isLoaded && <CitySelect medium onSelect={handleSelect} />}</CitySelectWrapper>
      <ToggleThemeButton switchThema={switchThema} />
    </StyledHeader>
  );
};

export default Header;
