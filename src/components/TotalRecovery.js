import React from 'react';
import Chart from './Chart';

export default () => (
  <Chart
    id="totalRecoveryChart"
    chartDataKeys={["recovery"]}
    labelFormatter={(value) => `${value} tarihindeki toplam iyileşen hasta sayısı`}
    headerText="Toplam iyileşen hasta"
  />
);
