import {EyeIcon} from 'components/icons';
import {P} from 'components/layout';
import {DashboardLittleComponent} from './styles';

export const Visibility = ({visibility}) => {
  return (
    <DashboardLittleComponent>
      <div className="left-side">
        {visibility} <P>m</P>
      </div>
      <div className="right-side">
        <EyeIcon width={16} height={16} color="rgba(255, 255, 255, 0.5)" />
        <P>The fog is affecting visibility.</P>
      </div>
    </DashboardLittleComponent>
  );
};
