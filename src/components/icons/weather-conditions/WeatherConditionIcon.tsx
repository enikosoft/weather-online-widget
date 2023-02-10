import {ImagePath, useImage} from 'hooks';
import styled from 'styled-components';
import {Icon} from '../styles';
import {IconBaseProps} from '../type';

interface Props extends IconBaseProps {
  condition: string;
}

const IconImage = styled.img`
  object-fit: cover;
`;

export const WeatherConditionIcon = (props: Props) => {
  const {condition, className} = props;
  const {image} = useImage(`${condition}.png`, ImagePath.ConditionIcons);

  const {width = 30, height = 38} = props;

  return (
    <Icon className={className}>
      <IconImage src={image} alt={condition} width={width} height={height} />
    </Icon>
  );
};
