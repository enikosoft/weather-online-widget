import {useDarkMode} from 'hooks';
import {useTheme} from 'styled-components';
import {GlobalTheme} from 'styles';

export const withTheme = (Component) => (props) => {
  const [, toggleTheme] = useDarkMode();
  const theme = useTheme() as GlobalTheme;

  const themeMode = theme.mode;
  return <Component {...props} theme={themeMode} toggleTheme={toggleTheme} />;
};
