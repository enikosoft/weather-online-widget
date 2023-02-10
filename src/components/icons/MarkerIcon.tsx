import {useDarkMode} from 'hooks';
import {ThemeContext} from 'styles';
import {Icon} from './styles';
import {IconBaseProps} from './type';

export const MarkerIcon = (props: IconBaseProps) => {
  const [theme] = useDarkMode();

  const {width = 30, height = 38, color} = props;

  const defaultColor = color ? color : theme === ThemeContext.light ? '#000' : '#fff';

  return (
    <Icon>
      <svg fill={defaultColor} width={width} height={height} viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
      </svg>
    </Icon>
  );
};