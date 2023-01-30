import React from 'react';
import {SearchPageLayout} from './style';

import {Button} from 'components/controls';
import {CenteredWrapper, H} from 'components/layout';
import {CitySelect} from 'components/core/CitySelect';
import {useNavigate} from 'react-router-dom';
import {Option} from 'components/controls/Option';

export const SearchPage = () => {
  const navigate = useNavigate();

  const handleDetectLocation = () => {
    console.log('DETECT LOCATION');
  };

  const handleSelect = (data: Option) => {
    const city = JSON.parse(data.value.toString());
    navigate('/dashboard', {state: {city}});
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

        <div style={{marginTop: '60px'}}>
          <CitySelect large onSelect={handleSelect} />
        </div>
      </CenteredWrapper>
    </SearchPageLayout>
  );
};

export default SearchPage;
