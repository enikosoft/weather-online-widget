import {useMediaQuery} from 'react-responsive';

import {MoonIcon, SunIcon} from 'components/icons';
import {withTheme} from 'hoc';
import {mediaBreakpoints, ThemeContext, ThemeProps, themeStyles} from 'styles';
import {Button, StyledThemeButtonContainer} from './styles';

interface Props extends ThemeProps {
  switchThema: () => void;
}

export const ToggleThemeButton = withTheme((props: Props) => {
  const {switchThema, theme} = props;

  const iconColor = themeStyles[theme].color;

  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.lg}px)`,
  });

  return (
    <StyledThemeButtonContainer>
      <div onClick={switchThema} id="btn">
        <Button className={`${theme === ThemeContext.light ? 'active' : ''}`}>
          <div>
            <SunIcon color={`${theme === ThemeContext.light ? iconColor : 'rgba(255, 255, 255, 0.36)'}`} />
            {!mobileAndTablet && <div className="label">Ligth</div>}
          </div>
        </Button>
        <Button className={`${theme === ThemeContext.dark ? 'active' : ''}`}>
          <div>
            <MoonIcon color={`${theme !== ThemeContext.light ? iconColor : 'rgba(0, 0, 0, 0.36)'}`} />
            {!mobileAndTablet && <div className="label">Dark</div>}
          </div>
        </Button>
      </div>
    </StyledThemeButtonContainer>
  );
});
