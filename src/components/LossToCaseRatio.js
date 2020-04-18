import React from 'react';
import { getValueInPercent } from '../utils';
import Chart from './Chart';

export default () => (
  <Chart
    id="lossToCaseRatioChart"
    chartDataKey="lossToCaseRatio"
    labelFormatter={(value) => `${value} tarihindeki kayıp/vaka oranı`}
    headerText="Günlük toplam kayıp/vaka oranı"
    formatter={(value) => [getValueInPercent(value), '']}
    notes="Not: Vaka bilgisi eksikse o gün için veri göstrilmemektedir.Bu durum çok gerçekçi ve şu an mümkün olmasa da olasılığı öngörülmüştür."
  />
);
