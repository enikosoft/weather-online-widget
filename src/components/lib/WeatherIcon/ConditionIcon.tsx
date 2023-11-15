import styled from 'styled-components';
import Lottie from 'lottie-react';

import {IconBaseProps} from 'components/icons/type';
import {useAnimationData, WeatherConditionAnimationPath} from './useAnimationData';

interface Props extends IconBaseProps {
  condition: string;
}


export const Icon = styled.div`
  display: flex;
`;

export const ConditionIcon = (props: Props) => {
  const {condition, className} = props;
  const {animation, loading} = useAnimationData(`${condition}`, WeatherConditionAnimationPath.ConditionIcons);

  const {width = 30, height = 38} = props;

  return (
    <Icon className={className}>
      {loading && !animation && <></>}
      {animation && <Lottie animationData={animation} autoplay loop width={`${width}px`} height={`${height}px`} />}
    </Icon>
  );
};
