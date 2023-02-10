import {LikeIcon, MarkerIcon} from 'components/icons';
import {withTheme} from 'hoc';
import {ThemeContext, ThemeProps} from 'styles';
import {City} from 'types/city';
import {HeaderSubText, HeaderText, CityTitleStyled} from './style';

export const CityTitle = withTheme((props: ThemeProps & {city: City}) => {
  return (
    <CityTitleStyled>
      <MarkerIcon color={props.theme === ThemeContext.dark ? '#fff' : '#000'} />
      <HeaderText>{props.city.name},</HeaderText>
      <HeaderSubText>{props.city.countryName}</HeaderSubText>
      <LikeIcon liked={true} />
    </CityTitleStyled>
  );
});
