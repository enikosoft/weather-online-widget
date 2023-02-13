import {useEffect, useState} from 'react';
import {BackgroundImage, TimeWrapper} from './styles';

interface Props {
  cityPhotos?: string[];
}

export const CurrentTime = (props: Props) => {
  const {cityPhotos} = props;
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
    <TimeWrapper>
      {cityPhotos && <BackgroundImage src={cityPhotos[0]} />}
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
