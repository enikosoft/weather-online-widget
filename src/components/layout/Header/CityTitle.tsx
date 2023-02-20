import {LikeIcon, MarkerIcon} from 'components/icons';
import {withTheme} from 'hoc';
import {useFavoritesStore} from 'state';
import {ThemeContext, ThemeProps} from 'styles';
import {City} from 'types/city';
import {HeaderSubText, HeaderText, CityTitleStyled} from './style';

export const CityTitle = withTheme((props: ThemeProps & {city: City}) => {
  const {city} = props;

  const [isLiked, toggleFavorite] = useFavoritesStore((state) => [state.isLiked(city.id), state.toggle]);

  const onClick = () => {
    toggleFavorite(city);
  };

  return (
    <CityTitleStyled>
      <MarkerIcon color={props.theme === ThemeContext.dark ? '#fff' : '#000'} />
      <HeaderText>{props.city.name},</HeaderText>
      <HeaderSubText>{props.city.countryName}</HeaderSubText>

      <LikeIcon onClick={onClick} liked={isLiked} />
    </CityTitleStyled>
  );
});
