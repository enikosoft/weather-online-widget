import {TemperatureIcon} from 'components/icons';
import {DashboardLittleComponent} from './styles';

export const FeelsLikeTemperature = ({feelsLike = 0}) => {
  return (
    <DashboardLittleComponent>
      <div className="left-side">
        <TemperatureIcon className="icon" width={23} height={23} color="#FFF" />
        {feelsLike} °C
      </div>
      <div className="right-side">
        <div style={{width: '16px', height: '16px'}} />
        <p>Humidity is making it feel hotter</p>
      </div>
    </DashboardLittleComponent>
  );
};
