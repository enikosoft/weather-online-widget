import {useDarkMode} from 'hooks';
import {ThemeContext} from 'styles';
import {Icon} from './styles';
import {IconBaseProps} from './type';

export const SunSetIcon = (props: IconBaseProps) => {
  const [theme] = useDarkMode();

  const {width = 26, height = 26, color, className} = props;

  const defaultColor = color ? color : theme === ThemeContext.light ? 'black' : '#hite';

  return (
    <Icon className={className}>
      <svg fill={defaultColor} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7,15a5,5,0,0,1,10,0,1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0ZM17.293,8.293,16.586,9A1,1,0,1,0,18,10.414l.707-.707a1,1,0,0,0-1.414-1.414ZM22,15a1,1,0,0,0-1-1H20a1,1,0,0,0,0,2h1A1,1,0,0,0,22,15ZM4,14H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2ZM6.707,8.293A1,1,0,0,0,5.293,9.707L6,10.414A1,1,0,1,0,7.414,9ZM4,18a1,1,0,0,0,1,1H19a1,1,0,0,0,0-2H5A1,1,0,0,0,4,18Zm13,4a1,1,0,0,0-1-1H8a1,1,0,0,0,0,2h8A1,1,0,0,0,17,22ZM12,1a1,1,0,0,0-1,1V5.586L9.707,4.293A1,1,0,0,0,8.293,5.707l3,3a1,1,0,0,0,1.414,0l3-3a1,1,0,1,0-1.414-1.414L13,5.586V2A1,1,0,0,0,12,1Z" />
      </svg>
    </Icon>
  );
};
