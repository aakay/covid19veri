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

const LossToCaseRatio = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Günlük toplam kayıp/vaka oranı</h2>
    <p style={{ marginTop: 5 }}>Not: Vaka bilgisi eksikse 0 gösterilir. Bu durum çok gerçekçi ve şu an mümkün olmasa da olasılığı öngörülmüştür.</p>
    <ResponsiveContainer width={600} aspect={2}>
      <AreaChart id="dailyNewLossesChart" data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey="lossToCaseRatio" type="monotone" stroke="#8884d8" fill="#8884d8" />
        <XAxis dataKey="date" />
        <YAxis />((
        <Tooltip
          labelFormatter={(value) => `${value} tarihindeki kayıp/vaka oranı`}
          formatter={(value) => [value, '']}
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default LossToCaseRatio;
