import React from 'react';
import Chart from './Chart';

export default () => (
  <Chart
    id="dailyLossesChart"
    chartDataKey="dailyLoss"
    labelFormatter={(value) => `${value} tarihindeki kayıp`}
    headerText="Günlük kayıp"
  />
);
