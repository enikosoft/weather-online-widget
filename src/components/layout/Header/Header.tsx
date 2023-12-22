import {CitySelect} from 'components/core';
import {useMediaQuery} from 'react-responsive';

import {useJsApiLoader} from '@react-google-maps/api';
import {ToggleThemeButton} from 'components/lib';
import {GOOGLE_API_KEY} from 'config/api';
import {mediaBreakpoints} from 'styles';
import {City} from 'types/city';
import {CityTitle} from './CityTitle';
import {CitySelectWrapper, StyledHeader} from './style';

const libraries: ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[] = ['places'];

const Header = ({switchThema, selectCity, city, isDashboard}) => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.lg}px)`,
  });

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
    <StyledHeader isDashboard={isDashboard}>
      {isDashboard && city && <CityTitle city={city} />}
      <CitySelectWrapper>{isLoaded && <CitySelect medium onSelect={handleSelect} />}</CitySelectWrapper>
      {!mobileAndTablet && <ToggleThemeButton switchThema={switchThema} />}
    </StyledHeader>
  );
};

export default Header;
