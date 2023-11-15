import {useEffect, useRef, useState} from 'react';
import {ThemeProvider} from 'styled-components';
import { DateTime } from 'luxon';

import {DEFAULT_YELLOW, Wrapper} from './styles';
import {SunIcon2, SunRiseIcon, SunSetIcon} from 'components/icons';

interface Props {
  timeZoneId?: string;
  sunriseUnix: number;
  sunsetUnix: number;
  size: number;
  sunIconSize?: number;
}

/**
 * 
 * @param props
 * `timeZoneId` - If you provide a timeZoneId, the time will be displayed in that zone.
 * If you don't provide one, then it will be in your zone.
 *  
 * @returns 
 */
export const SunSet = (props: Props) => {
  const {timeZoneId, size, sunIconSize = 16, sunriseUnix, sunsetUnix} = props;

  const nowUnix = DateTime.now().setZone(timeZoneId).toUTC().toSeconds();
  const sunriseDateTime = DateTime.fromSeconds(sunriseUnix).setZone(timeZoneId);
  const sunsetDateTime = DateTime.fromSeconds(sunsetUnix).setZone(timeZoneId);
  
  if (!sunriseDateTime.isValid || !sunsetDateTime.isValid) {
    throw new Error('Unix time props is invalid.');
  }
  
  const sunrise = sunriseDateTime.toFormat('HH:mm a');
  const sunset = sunsetDateTime.toFormat('HH:mm a');

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
  const now = DateTime.utc();
  if (now > DateTime.fromSeconds(sunsetUnix) || DateTime.fromSeconds(sunriseUnix) > now) {
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
