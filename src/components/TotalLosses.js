import React from 'react';
import Chart from './Chart';

export default () => (
  <Chart
    id="totalCasesChart"
    chartDataKey="losses"
    labelFormatter={(value) => `${value} tarihindeki toplam kayıp`}
    headerText="Toplam Kayıp"
  />
);
