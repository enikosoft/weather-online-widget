import {Col, Row} from 'antd';
import {Card} from 'components/layout';
import {FavoriteCity} from 'types/city';
import {FavoriteCard} from './FavoriteCard';
import {StyledFavoriteWrapper} from './styles';

interface Props {
  favorites: FavoriteCity[];
}

export const FavoriteLayout = (props: Props) => {
  const {favorites} = props;

  return (
    <StyledFavoriteWrapper>
      <Row gutter={[40, 40]} wrap>
        {favorites.map((city, index) => (
          <Col sm={24} xxl={8} lg={12} key={`f-item-${index}-${city.id}`}>
            <Card padding={40}>
              <FavoriteCard city={city} />
            </Card>
          </Col>
        ))}
      </Row>
    </StyledFavoriteWrapper>
  );
};
