import React from 'react';

import Chart from './Chart';

export default () => (
  <Chart
    id="activeCasesChart"
    chartDataKeys={["active"]}
    labelFormatter={(value) => `${value} tarihindeki aktif vaka sayısı`}
    headerText="Aktif vaka"
    notes="Aktif vaka sayısı, o günkü toplam vaka sayısı - toplam iyileşen kişi sayısı - toplam kayıp sayısı ile belirlenir."
  />
);
