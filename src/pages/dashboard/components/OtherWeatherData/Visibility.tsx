import {EyeIcon} from 'components/icons';
import {DashboardLittleComponent} from './styles';

export const Visibility = ({visibility}) => {
  return (
    <DashboardLittleComponent>
      <div className="left-side">
        {visibility} <span>m</span>
      </div>
      <div className="right-side">
        <EyeIcon width={16} height={16} color="rgba(255, 255, 255, 0.5)" />
        <p>The fog is affecting visibility.</p>
      </div>
    </DashboardLittleComponent>
  );
};
