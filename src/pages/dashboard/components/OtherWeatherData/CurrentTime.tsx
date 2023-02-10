import {useEffect, useState} from 'react';
import {BackgroundImage, TimeWrapper} from './styles';

export const CurrentTime = ({cityPhotos}) => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <TimeWrapper>
      <BackgroundImage src={cityPhotos} />
      <div className="timer">
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        })}
      </div>
    </TimeWrapper>
  );
};
