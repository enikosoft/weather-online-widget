import {CitySelect} from 'components/core';
import {useMediaQuery} from 'react-responsive'

import {CityTitle} from './CityTitle';
import {CitySelectWrapper, StyledHeader} from './style';
import {City} from 'types/city';
import {useJsApiLoader} from '@react-google-maps/api';
import {GOOGLE_API_KEY} from 'config/api';
import {useLocation} from 'react-router-dom';
import { ToggleThemeButton } from 'components/lib';
import { mediaBreakpoints } from 'styles';

const libraries: ("drawing" | "geometry" | "localContext" | "places" | "visualization")[] = ['places']

const Header = ({switchThema, selectCity, city}) => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.lg}px)`
  })
  
  const location = useLocation()
  const onlyForDashboard = location.pathname.includes('dashboard')

  const handleSelect = (item: City) => {
    selectCity(item);
  };

  const {isLoaded} = useJsApiLoader({
    libraries,
    language: 'en',
    preventGoogleFontsLoading: true,
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  return (
    <StyledHeader>
      {onlyForDashboard && city && <CityTitle city={city} />}
      <CitySelectWrapper>{isLoaded && <CitySelect medium onSelect={handleSelect} />}</CitySelectWrapper>
      {!mobileAndTablet && <ToggleThemeButton switchThema={switchThema} />}
    </StyledHeader>
  );
};

export default Header;
