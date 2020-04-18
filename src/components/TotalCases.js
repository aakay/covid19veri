import React from 'react';
import Chart from './Chart';

export default () => (
  <Chart
    id="totalCasesChart"
    chartDataKey="cases"
    labelFormatter={(value) => `${value} tarihindeki toplam vaka`}
    headerText="Toplam vaka"
  />
);
