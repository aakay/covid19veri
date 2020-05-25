import React from 'react';
import Chart from './Chart';

export default () => (
  <Chart
    id="dailyRecoveryChart"
    chartDataKeys={["dailyRecovery"]}
    labelFormatter={(value) => `${value} tarihindeki iyileşen hasta sayısı`}
    headerText="Günlük iyileşen hasta"
  />
);
