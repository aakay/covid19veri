import React from 'react';
import Chart from './Chart';

export default () => (
  <Chart
    id="dailyCasesChart"
    chartDataKey="positive"
    labelFormatter={(value) => `${value} tarihindeki vaka`}
    headerText="Günlük vaka"
  />
);
