import {useDarkMode} from 'hooks';

import {ThemeContext} from 'styles';
import {Icon} from './styles';
import {IconBaseProps} from './type';

export const SunIcon2 = (props: IconBaseProps) => {
  const [theme] = useDarkMode();

  const {width = 26, height = 26, color, className} = props;

  const defaultColor = color ? color : theme === ThemeContext.light ? 'black' : 'white';

  return (
    <Icon className={className}>
      <svg fill={defaultColor} width={width} height={height} viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.866 10.052H1.277a.554.554 0 0 1 0-1.109h1.589a.554.554 0 0 1 0 1.109zm1.65-3.984a.552.552 0 0 1-.392-.162L3.001 4.782a.554.554 0 0 1 .784-.784l1.123 1.124a.554.554 0 0 1-.392.946zm-1.123 9.09A.554.554 0 0 1 3 14.214l1.123-1.124a.554.554 0 0 1 .784.784l-1.123 1.123a.552.552 0 0 1-.392.163zm9.568-5.66a4.453 4.453 0 1 1-4.454-4.454 4.453 4.453 0 0 1 4.454 4.453zM8.5 4.417a.554.554 0 0 1-.554-.555V2.275a.554.554 0 1 1 1.108 0v1.588a.554.554 0 0 1-.554.555zm0 12.856a.554.554 0 0 1-.554-.554v-1.588a.554.554 0 0 1 1.108 0v1.588a.554.554 0 0 1-.554.554zm3.984-11.206a.554.554 0 0 1-.392-.946l1.123-1.123a.554.554 0 0 1 .784.783l-1.123 1.123a.551.551 0 0 1-.392.163zm1.123 9.09a.553.553 0 0 1-.392-.162l-1.123-1.123a.554.554 0 0 1 .784-.784l1.123 1.124a.554.554 0 0 1-.392.946zm2.116-5.106h-1.589a.554.554 0 0 1 0-1.109h1.589a.554.554 0 0 1 0 1.109z" />
      </svg>
    </Icon>
  );
};
