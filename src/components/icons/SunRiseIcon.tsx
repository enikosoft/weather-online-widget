import {useDarkMode} from 'hooks';
import {ThemeContext} from 'styles';
import {Icon} from './styles';
import {IconBaseProps} from './type';

export const SunRiseIcon = (props: IconBaseProps) => {
  const [theme] = useDarkMode();

  const {width = 26, height = 26, color, className} = props;

  const defaultColor = color ? color : theme === ThemeContext.light ? 'black' : 'white';

  return (
    <Icon className={className}>
      <svg fill={defaultColor} width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7,15a5,5,0,0,1,10,0,1,1,0,0,1-2,0,3,3,0,0,0-6,0,1,1,0,0,1-2,0Zm11-4.586.707-.707a1,1,0,0,0-1.414-1.414L16.586,9A1,1,0,1,0,18,10.414ZM20,16h1a1,1,0,0,0,0-2H20a1,1,0,0,0,0,2ZM4,14H3a1,1,0,0,0,0,2H4a1,1,0,0,0,0-2ZM5.293,9.707,6,10.414A1,1,0,1,0,7.414,9l-.707-.707A1,1,0,0,0,5.293,9.707ZM4,18a1,1,0,0,0,1,1H19a1,1,0,0,0,0-2H5A1,1,0,0,0,4,18Zm4,3a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2ZM12,9a1,1,0,0,0,1-1V4.414l1.293,1.293a1,1,0,0,0,1.414-1.414l-3-3a1,1,0,0,0-1.416,0l-3,3A1,1,0,0,0,9.707,5.707L11,4.414V8A1,1,0,0,0,12,9Z" />
      </svg>
    </Icon>
  );
};
