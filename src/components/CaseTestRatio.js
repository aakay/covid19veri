import React from 'react';
import { getValueInPercent, getCaseText } from '../utils';
import Chart from './Chart';

export default () => (
  <Chart
    id="caseToTestRatioChart"
    chartDataKeys={['dailyCaseToTestRatio', 'totalCaseToTestRatio']}
    labelFormatter={(value) => `${value} tarihindeki vaka/test oranı`}
    headerText="Vaka/test oranı"
    formatter={(value, name) => [getValueInPercent(value), `${getCaseText(name)}: `]}
  />
);
