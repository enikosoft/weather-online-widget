import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import {useEffect} from 'react';
import styled from 'styled-components';
import {themeStyles} from 'styles';

const Wrapper = styled.div`
  position: relative;
  > #uvchart {
    > div > svg > g {
      > :last-child {
        background: green;
        > :last-child {
          display: none;
        }
      }
    }
  }
  > .labels {
    position: absolute;
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

export const UVIndex = ({uvIndex = 0}) => {
  useEffect(() => {
    const chart = am4core.create('uvchart', am4charts.GaugeChart);

    chart.hiddenState.properties.opacity = 0;

    const mainAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());

    mainAxis.zIndex = 0;
    mainAxis.min = 0;
    mainAxis.max = 8;

    mainAxis.resizable = false;

    mainAxis.strictMinMax = false;
    mainAxis.renderer.inside = true;
    mainAxis.renderer.innerRadius = -40;
    mainAxis.renderer.radius = am4core.percent(100);

    mainAxis.renderer.line.strokeOpacity = 0;
    mainAxis.renderer.line.strokeWidth = 1;
    mainAxis.renderer.line.stroke = am4core.color('#fff');

    mainAxis.renderer.labels.template.radius = 40;
    mainAxis.renderer.labels.template.fontSize = 10;
    mainAxis.renderer.labels.template.stroke = am4core.color('#FFF');
    mainAxis.renderer.labels.template.strokeOpacity = 0.8;
    mainAxis.renderer.labels.template.fontFamily = 'Roboto, sans-serif';

    const greyAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());

    greyAxis.resizable = false;

    greyAxis.zIndex = 0;
    greyAxis.renderer.radius = am4core.percent(80);
    greyAxis.renderer.line.strokeOpacity = 0.5;
    greyAxis.renderer.line.strokeWidth = 10;
    greyAxis.renderer.line.stroke = am4core.color('#515153');

    const whiteAxis = chart.xAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererCircular>());

    whiteAxis.resizable = false;

    whiteAxis.zIndex = 1;
    whiteAxis.renderer.radius = am4core.percent(80);
    whiteAxis.renderer.line.strokeOpacity = 0.5;
    whiteAxis.renderer.line.strokeWidth = 2;
    whiteAxis.renderer.line.stroke = am4core.color('#FFF');

    const range = mainAxis.axisRanges.create();

    range.value = 0;
    range.endValue = uvIndex;

    range.axisFill.fillOpacity = 0.2;

    const gradient = new am4core.LinearGradient();
    gradient.addColor(am4core.color('#006BFF'));
    gradient.addColor(am4core.color('#74C3DA'));

    range.axisFill.fill = gradient;
    range.axisFill.zIndex = 12;
  });

  return (
    <Wrapper>
      <div id="uvchart" />
      <div className="labels">
        <h2>{uvIndex}</h2>
        <h3>UV</h3>
      </div>
    </Wrapper>
  );
};
