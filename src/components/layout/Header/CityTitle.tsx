import {LikeIcon, MarkerIcon} from 'components/icons';
import {withTheme} from 'hoc';
import {useFavorite} from 'hooks';
import {ThemeContext, ThemeProps} from 'styles';
import {City} from 'types/city';
import {HeaderSubText, HeaderText, CityTitleStyled} from './style';

export const CityTitle = withTheme((props: ThemeProps & {city: City}) => {
  const {city} = props;

  const [liked, toggleFavorite] = useFavorite(city);

  const onClick = () => {
    toggleFavorite();
  };

  return (
    <CityTitleStyled>
      <MarkerIcon color={props.theme === ThemeContext.dark ? '#fff' : '#000'} />
      <HeaderText>{props.city.name},</HeaderText>
      <HeaderSubText>{props.city.countryName}</HeaderSubText>

      <LikeIcon onClick={onClick} liked={liked} />
    </CityTitleStyled>
  );
});
