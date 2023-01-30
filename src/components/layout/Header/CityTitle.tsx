import {LikeIcon, MarkerIcon} from 'components/icons';
import {withTheme} from 'hoc';
import {ThemeContext, ThemeProps} from 'styles';
import {HeaderSubText, HeaderText, CityTitleStyled} from './style';

export const CityTitle = withTheme((props: ThemeProps) => {
  return (
    <CityTitleStyled>
      <MarkerIcon color={props.theme === ThemeContext.dark ? '#fff' : '#000'} />
      <HeaderText>Syndey,</HeaderText>
      <HeaderSubText>Australia</HeaderSubText>
      <LikeIcon liked={true} />
    </CityTitleStyled>
  );
});
