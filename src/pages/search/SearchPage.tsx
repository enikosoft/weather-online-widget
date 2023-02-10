import {getDetails, getGeocode} from 'use-places-autocomplete';
import {useNavigate} from 'react-router-dom';
import {SearchPageLayout} from './style';
import {Button} from 'components/controls';
import {CenteredWrapper, H} from 'components/layout';
import {CitySelect} from 'components/core/CitySelect';
import {City} from 'types/city';
import {mapDataToCity} from 'utils/citiesUtils';

export const SearchPage = ({googleMapApiLoaded}) => {
  const navigate = useNavigate();

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

          const city = mapDataToCity(details);

          if (city) {
            navigate('/app/dashboard', {
              state: {
                city: {
                  ...city,
                  lat,
                  lng,
                },
              },
            });
          }
        }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleSelect = (city: City) => {
    navigate('/app/dashboard', {state: {city}});
  };

  return (
    <SearchPageLayout>
      <div style={{justifyContent: 'flex-end', display: 'inherit'}}>
        <Button medium primary widthContent onClick={handleDetectLocation}>
          Determine my location
        </Button>
      </div>

      <CenteredWrapper>
        <H level={5} bold>
          Forecast
        </H>
        <H level={1} isSubtitle>
          Find a settlement or determine your location by clicking the button at the top right!
        </H>

        <div style={{marginTop: '60px'}}>{googleMapApiLoaded && <CitySelect large onSelect={handleSelect} />}</div>
      </CenteredWrapper>
    </SearchPageLayout>
  );
};

export default SearchPage;
