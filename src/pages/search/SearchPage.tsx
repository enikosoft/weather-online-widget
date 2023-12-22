import {useEffect, useState} from 'react';

import {useJsApiLoader} from '@react-google-maps/api';
import {useMediaQuery} from 'react-responsive';
import {useNavigate} from 'react-router-dom';
import {getDetails, getGeocode} from 'use-places-autocomplete';

import {Button} from 'components/controls';
import {CitySelect} from 'components/core/CitySelect';
import {H} from 'components/layout';
import {GOOGLE_API_KEY} from 'config/api';
import {useCityStore} from 'state/city';
import {mediaBreakpoints} from 'styles';
import {City} from 'types/city';
import {mapDataToCity} from 'utils/citiesUtils';

import {BiLogIn} from 'react-icons/bi';
import {FiUserPlus} from 'react-icons/fi';
import {MdMyLocation} from 'react-icons/md';

import {CenteredWrapper} from './CenteredWrapper';
import {SearchPageLayout} from './style';

const libraries: ('drawing' | 'geometry' | 'localContext' | 'places' | 'visualization')[] = ['places'];

import {Layout} from 'antd';
import logo from 'assets/images/SearchBackground-1.jpg';
import {AppLoader} from 'components/core';

export const SearchPage = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);

  useEffect(() => {
    const img = new Image();

    const timer = setTimeout(() => {
      img.src = logo;

      img.onload = () => {
        console.log('AAAA');
        setBackgroundLoaded(true);
      };
    }, 1500);

    return () => {
      img.onload = null;
      clearTimeout(timer);
    };
  }, []);

  const navigate = useNavigate();
  const setCity = useCityStore((state) => state.add);

  const {isLoaded} = useJsApiLoader({
    libraries,
    language: 'en',
    preventGoogleFontsLoading: true,
    googleMapsApiKey: GOOGLE_API_KEY,
  });

  const handleDetectLocation = () => {
    try {
      navigator.geolocation.getCurrentPosition(async (pos: GeolocationPosition) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        const geoCoderesult = await getGeocode({location: {lat, lng}});

        const placeId = geoCoderesult?.find(
          (res) => res.types.includes('locality') && res.types.includes('political')
        )?.place_id;

        if (placeId) {
          const details = await getDetails({
            placeId,
            fields: ['place_id', 'geometry', 'address_components', 'photos'],
          });

          const city = await mapDataToCity(details);

          if (city) {
            setCity(city);
            navigate('/app/dashboard');
          }
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelect = (city: City) => {
    setCity(city);
    navigate('/app/dashboard');
  };

  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.md}px)`,
  });

  const styling = {
    height: mobileAndTablet ? '50px' : '80px',
    maxWidth: '90%',
    borderRadius: '30px',
    backgroundColor: 'white',
    hoverBackgroundColor: '#eee',
    fontSize: mobileAndTablet ? '12px' : '16px',
    fontFamily: 'var(--primaryFontFamily)',
    placeholderColor: 'grey',
    zIndex: 0,
  };

  if (!backgroundLoaded)
    return (
      <Layout>
        <AppLoader />
      </Layout>
    );

  return (
    <SearchPageLayout>
      <div className="nav-block">
        <div className="account-block">
          <Button icon={<BiLogIn />} medium secondary widthContent label="Login" />
          <Button icon={<FiUserPlus />} medium secondary widthContent label="Register" />
        </div>

        {!mobileAndTablet && (
          <div className="determine-location">
            <Button
              icon={<MdMyLocation />}
              medium
              primary
              widthContent
              onClick={handleDetectLocation}
              label="Determine my location"
            />
          </div>
        )}
      </div>

      <CenteredWrapper>
        <H className="app-name" level={1} bold>
          UrbanClimaClock
        </H>
        <H className="app-name-subtitle" level={2} secondary>
          Embark on a journey through urban life, where time and weather unfold harmoniously! Find a settlement or
          determine your location.
        </H>

        {mobileAndTablet && (
          <div className="determine-location">
            <Button
              icon={<MdMyLocation />}
              medium
              primary
              widthContent
              onClick={handleDetectLocation}
              label="Determine my location"
            />
          </div>
        )}

        <div style={{marginTop: '60px'}}>
          {isLoaded && (
            <CitySelect
              showInputSearchIcon={!mobileAndTablet}
              styling={styling}
              mobileAndTablet
              large
              onSelect={handleSelect}
            />
          )}
        </div>
      </CenteredWrapper>
    </SearchPageLayout>
  );
};

export default SearchPage;
