import {WindDirectionImage, Wrapper} from './styles';
import {WindDirectionIcon, WindSpeedIcon} from 'components/icons';
import {P} from 'components/layout';

export const Wind = ({windSpeed = 0, windDir = 90}) => {
  return (
    <Wrapper>
      <WindDirectionImage direction={windDir}>
        <WindDirectionIcon width={90} height={90} />
      </WindDirectionImage>
      <div className="labels">
        <WindSpeedIcon width={50} height={70} />
        <P className="wind-speed">{windSpeed}</P>
        <P>km/h</P>
      </div>
    </Wrapper>
  );
};
