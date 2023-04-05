import {TemperatureIcon} from 'components/icons';
import {DashboardLittleComponent} from './styles';
import {P} from 'components/layout';

export const FeelsLikeTemperature = ({feelsLike = 0}) => {
  return (
    <DashboardLittleComponent>
      <div className="left-side">
        <TemperatureIcon className="icon" width={23} height={23} color="#FFF" />
        {feelsLike} °C
      </div>
      <div className="right-side">
        <div style={{width: '16px', height: '16px'}} />
        <P>Humidity is making it feel hotter</P>
      </div>
    </DashboardLittleComponent>
  );
};
