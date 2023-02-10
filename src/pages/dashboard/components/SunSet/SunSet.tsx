import {useEffect, useRef, useState} from 'react';
import moment from 'moment-timezone';
import {ThemeProvider} from 'styled-components';

import {DEFAULT_YELLOW, Wrapper} from './styles';
import {SunIcon2, SunRiseIcon, SunSetIcon} from 'components/icons';

interface Props {
  sunriseUnix: number;
  sunsetUnix: number;
  size: number;
  sunIconSize?: number;
}

export const SunSet = (props: Props) => {
  const {size, sunIconSize = 16, sunriseUnix, sunsetUnix} = props;

  const nowUnix = moment().utc().unix();

  if (!moment.unix(sunriseUnix).isValid || !moment.unix(sunsetUnix).isValid) {
    throw new Error('Unix time props is invalid.');
  }

  const sunrise = moment.unix(sunriseUnix).format('HH:mm A');
  const sunset = moment.unix(sunsetUnix).format('HH:mm A');

  const leftPos = ((nowUnix - sunriseUnix) * 180) / (sunsetUnix - sunriseUnix);

  const boxRef = useRef<HTMLDivElement>(null);
  const [sunRect, setSunRect] = useState({
    sunZoneLeft: 0,
    sunIconLeft: 0,
  });

  useEffect(() => {
    setSunRect({
      sunZoneLeft: boxRef.current?.offsetParent?.parentElement?.getBoundingClientRect()?.left || 0,
      sunIconLeft: boxRef.current?.getBoundingClientRect()?.left || 0,
    });
  }, []);

  let sunAnimationValue = sunRect.sunIconLeft - sunRect.sunZoneLeft;

  // if now is not a sun day
  if (moment().isAfter(moment.unix(sunsetUnix)) || moment.unix(sunriseUnix).isAfter(moment())) {
    sunAnimationValue = 0;
  }

  const theme = {
    width: `${size}px`,
    height: `${size}px`,
    sunAnimationValue,
    sunIconSize,
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div className="sun-widget">
          <div className="sun-zone">
            <div className="sun-animation" />
          </div>
          <div style={{transform: `rotate(${leftPos - 90}deg`}} className="sun-path">
            <div ref={boxRef} className="sun-icon">
              <SunIcon2 color={DEFAULT_YELLOW} width={25} height={25} />
            </div>
          </div>
        </div>
        <div className="legend">
          <div className="sunrise">
            <div className="legend-horisont" />

            <SunRiseIcon width={20} height={25} className="icon" color={'#D3D3D3'} />
            <div className="label">Sunrise</div>
            <div className="label time">{sunrise}</div>
          </div>
          <div className="sunset">
            <div className="legend-horisont" />
            <SunSetIcon width={20} height={25} color={'#D3D3D3'} className="icon" />
            <div className="label">Sunset</div>
            <div className="label time">{sunset}</div>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};
