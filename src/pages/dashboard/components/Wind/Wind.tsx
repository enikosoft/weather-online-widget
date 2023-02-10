import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import styled from 'styled-components';
import {themeStyles} from 'styles';
import {useEffect} from 'react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > .winddir {
    width: 250px;
    > div > svg > g {
      > :last-child {
        > :last-child {
          display: none;
        }
      }
    }
  }

  > .labels {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    left: 50%;
    top: 70%;
    transform: translate(-50%);

    > h2,
    h3 {
      line-height: 20px;
      margin: 0;
      font-size: 16px;
      font-family: ${(props) => themeStyles[props.theme.mode].fontFamily};
      color: ${(props) => themeStyles[props.theme.mode].color};
    }

    > h3 {
      color: var(--light-grey);
      font-size: 12px;
      margin-left: 5px;
    }
  }
`;

export const Wind = ({windSpeed = 0, windDir = 90}) => {
  useEffect(() => {
    const chart = am4core.create('winddir', am4charts.GaugeChart);

    chart.startAngle = -90;
    chart.endAngle = 310;

    const axis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());
    axis.min = 0;
    axis.max = 360;

    axis.renderer.line.strokeWidth = 2;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.line.stroke = am4core.color('#999');
    axis.renderer.inside = true;

    axis.renderer.axisFills.template.disabled = true;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.ticks.template.disabled = false;
    axis.renderer.ticks.template.length = 10;
    axis.renderer.ticks.template.strokeOpacity = 1;

    axis.renderer.ticks.template.stroke = am4core.color('#FFF');
    axis.renderer.ticks.template.strokeOpacity = 0.5;

    axis.renderer.labels.template.radius = 25;
    axis.renderer.labels.template.disabled = true;
    axis.renderer.ticks.template.disabled = true;

    axis.renderer.labels.template.fontSize = 10;
    axis.renderer.labels.template.stroke = am4core.color('#FFF');
    axis.renderer.labels.template.strokeOpacity = 0.5;

    function createLabel(label, deg) {
      const range = axis.axisRanges.create();
      range.value = deg;
      range.grid.disabled = true;
      range.label.text = label;
    }

    createLabel('N', 0);
    createLabel('', 22.5);
    createLabel('NE', 45);
    createLabel('', 67.5);
    createLabel('E', 90);
    createLabel('', 112.5);
    createLabel('SE', 135);
    createLabel('', 157.5);
    createLabel('S', 180);
    createLabel('', 202.5);
    createLabel('SW', 225);
    createLabel('', 247.5);
    createLabel('W', 270);
    createLabel('', 292.5);
    createLabel('NW', 315);
    createLabel('', 337.5);

    const northHand = chart.hands.push(new am4charts.ClockHand());
    northHand.radius = am4core.percent(70);
    northHand.startWidth = 5;
    northHand.endWidth = 1;
    northHand.rotationDirection = 'clockWise';
    northHand.pin.disabled = true;
    northHand.zIndex = 0;

    const gradient = new am4core.LinearGradient();
    gradient.addColor(am4core.color('#74C3DA'));
    gradient.addColor(am4core.color('#006BFF'));

    northHand.fill = gradient;
    northHand.stroke = gradient;
    northHand.value = windDir;
  });

  return (
    <Wrapper>
      <div className="winddir" />
      <div className="labels">
        <h2>{windSpeed}</h2>
        <h3>km/h</h3>
      </div>
    </Wrapper>
  );
};
