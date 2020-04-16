import React from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import data from '../../data';
import CustomizedAxisTick from '../common/CustomizedAxisTick';

const getValueInPercent = (value) =>
  `${Number.parseFloat(value * 100).toFixed(2)}%`;

const LossToCaseRatio = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Günlük toplam kayıp/vaka oranı</h2>
    <p style={{ marginTop: 5 }}>Not: Vaka bilgisi eksikse o gün için veri göstrilmemektedir. Bu durum çok gerçekçi ve şu an mümkün olmasa da olasılığı öngörülmüştür.</p>
    <ResponsiveContainer width={800} aspect={2}>
      <AreaChart id="lossToCaseRatioChart" data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey="lossToCaseRatio" type="monotone" stroke="#00a6a3" fill="#00a6a3" />
        <XAxis
          dataKey="date"
          height={100}
          tick={<CustomizedAxisTick />}
        />
        <YAxis />
        <Tooltip
          labelFormatter={(value) => `${value} tarihindeki kayıp/vaka oranı`}
          formatter={(value) => [getValueInPercent(value), '']}
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default LossToCaseRatio;
