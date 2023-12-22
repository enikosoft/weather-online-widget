import {DateTime} from 'luxon';
import {useEffect, useState} from 'react';

import {useCityStore} from 'state/city';
import {City} from 'types/city';

import {BackgroundImage, TimeWrapper} from './styles';

interface Props {
  compact?: boolean;
  cityPhotos?: string[];
  city?: City;
}

export const CurrentTime = (props: Props) => {
  const {cityPhotos, compact} = props;

  const [contextCity] = useCityStore((state) => [state.cityInContext]);
  const city = props.city || contextCity;

  const currentTime = DateTime.now().setZone(city?.timezone?.timeZoneId);
  const formattedTime = currentTime.toFormat('HH:mm:ss a');
  const [time, setTime] = useState(formattedTime);

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = DateTime.now().setZone(city?.timezone?.timeZoneId);
      const formattedTime = currentTime.toFormat('HH:mm:ss a');
      setTime(formattedTime);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TimeWrapper>
      {cityPhotos && <BackgroundImage src={cityPhotos[0]} />}
      <div className="city-time">
        <div className="timer">{time}</div>
        {city?.timezone && !compact && (
          <div className="timezone">
            <span className="timezone__id">{city?.timezone?.timeZoneId}</span>
            <span className="timezone__gmt">{city?.timezone?.gmt}</span>
            <div className="timezone__name">({city?.timezone?.timeZoneName})</div>
          </div>
        )}
      </div>
    </TimeWrapper>
  );
};
