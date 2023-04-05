import {Col, Row} from 'antd';
import {LikeIcon, WeatherConditionIcon} from 'components/icons';
import {CurrentTime} from 'pages/dashboard';
import {useFavoritesStore} from 'state';
import {FavoriteCity} from 'types/city';
import {StyledFavoriteCard} from './styles';

interface Props {
  city: FavoriteCity;
}

export const FavoriteCard = (props: Props) => {
  const {city} = props;
  const {photos, name, countryName} = city;

  const [isLiked, toggle] = useFavoritesStore((state) => [state.isLiked(city.id), state.toggle]);

  const onClick = (e) => {
    e.stopPropagation();
    toggle(city);
  };

  return (
    <StyledFavoriteCard>
      <div className="city-photo">
        <img src={photos[0]} alt={name} height={145} width={145}></img>
      </div>
      <div className="city-info">
        <div className="name">
          <span>
            {name}, {countryName}
          </span>
          <LikeIcon liked={isLiked} onClick={onClick} />
        </div>
        <div className="weather">
          <Row justify="space-between" className="forecast">
            {city.conditionIcon && (
              <Col span={6} className="forecast-icon">
                <WeatherConditionIcon condition={city.conditionIcon} width={65} height={45} />
              </Col>
            )}
            <Col span={8} className="forecast-temperature">
              {city.maxTemp}°C/<span>{city.minTemp}</span>
            </Col>
            <Col span={10} className="forecast-date">
              <CurrentTime compact city={city} />
            </Col>
          </Row>
        </div>
      </div>
    </StyledFavoriteCard>
  );
};
