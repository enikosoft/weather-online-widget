import {useDarkMode} from 'hooks';
import {ThemeContext} from 'styles';
import {Icon} from './styles';
import {IconBaseProps} from './type';

export const SearchIcon = (props: IconBaseProps) => {
  const [theme] = useDarkMode();

  const {width = 26, height = 26, color} = props;

  const defaultColor = color ? color : theme === ThemeContext.light ? 'black' : 'white';

  return (
    <Icon>
      <svg className="search-icon" width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <g fill="none" fillRule="evenodd">
          <path d="m0 0h32v32h-32z" />

          <path
            d="m15 0c8.2842712 0 15 6.71572875 15 15 0 3.7818764-1.3995847 7.2368622-3.7090554 9.8752589l4.6588029 4.660275c.3905243.3905243.3905243 1.0236893 0 1.4142136s-1.0236893.3905243-1.4142136 0l-4.6592637-4.6596882c-2.638525 2.3099983-6.0939106 3.7099407-9.8762702 3.7099407-8.28427125 0-15-6.7157288-15-15 0-8.28427125 6.71572875-15 15-15zm0 2c-7.17970175 0-13 5.82029825-13 13 0 7.1797017 5.82029825 13 13 13 7.1797017 0 13-5.8202983 13-13 0-7.17970175-5.8202983-13-13-13z"
            fill={defaultColor}
            fillRule="nonzero"
          />
        </g>{' '}
      </svg>
    </Icon>
  );
};
