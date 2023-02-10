import {HumidityIcon} from 'components/icons';
import {DashboardLittleComponent} from './styles';

export const Humidity = ({humidity = 0, dew = 0}) => {
  return (
    <DashboardLittleComponent>
      <div className="left-side">
        {humidity} <span>%</span>
      </div>
      <div className="right-side">
        <HumidityIcon width={16} height={16} color="rgba(255, 255, 255, 0.5)" />
        <p>The dew point us {dew}°C right now</p>
      </div>
    </DashboardLittleComponent>
  );
};
