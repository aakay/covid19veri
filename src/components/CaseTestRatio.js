import React from 'react';
import { getValueInPercent } from '../utils';
import Chart from './Chart';

export default () => (
  <Chart
    id="caseToTestRatioChart"
    chartDataKey="caseToTestRatio"
    labelFormatter={(value) => `${value} tarihindeki günlük vaka/test oranı`}
    headerText="Günlük vaka/test oranı"
    formatter={(value) => [getValueInPercent(value), '']}
    notes="Not: Test bilgisi eksikse o gün için veri gösterilmemiştir."
  />
);
