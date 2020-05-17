import React from 'react';
import { getValueInPercent } from '../utils';
import Chart from './Chart';

export default () => (
  <Chart
    id="lossToCaseRatioChart"
    chartDataKeys={["lossToCaseRatio"]}
    labelFormatter={(value) => `${value} tarihindeki toplam kayıp/vaka oranı`}
    headerText="Toplam kayıp/vaka oranı"
    formatter={(value) => [getValueInPercent(value), '']}
    notes="Not: Vaka bilgisi eksikse o gün için veri göstrilmemektedir.Bu durum çok gerçekçi ve şu an mümkün olmasa da olasılığı öngörülmüştür."
  />
);
