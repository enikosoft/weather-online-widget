import {useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {useCityStore} from 'state/city';
import {BackgroundImage, TimeWrapper} from './styles';
import {City} from 'types/city';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
interface Props {
  compact?: boolean;
  cityPhotos?: string[];
  city?: City;
}

export const CurrentTime = (props: Props) => {
  const {cityPhotos, compact} = props;
  const [dateState, setDateState] = useState('');

  const [contextCity] = useCityStore((state) => [state.cityInContext]);

  const city = props.city || contextCity;
  if (!city?.utcOffset) {
    return <div></div>;
  }

  useEffect(() => {
    const timer = setInterval(() => setDateState(dayjs().utcOffset(city.utcOffset).format('HH:mm:ss A')), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TimeWrapper>
      {cityPhotos && <BackgroundImage src={cityPhotos[0]} />}
      <div className="city-time">
        <div className="timer">{dateState}</div>
        {city?.timezone && !compact && <span className="timezone">{city?.timezone}</span>}
      </div>
    </TimeWrapper>
  );
};
