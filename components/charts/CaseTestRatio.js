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

const CaseTestRatio = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Vaka/Test oranı</h2>
    <h5 style={{ marginTop: 15 }}>Test bilgisi eksikse 0 gösterilir.</h5>
    <ResponsiveContainer width={600} aspect={2}>
      <AreaChart id="dailyNewLossesChart" data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey="caseTestRatio" type="monotone" stroke="#8884d8" fill="#8884d8" />
        <XAxis dataKey="date" />
        <YAxis />((
        <Tooltip
          labelFormatter={(value) => `${value} tarihindeki vaka/test oranı`}
          formatter={(value) => [value, '']}
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default CaseTestRatio;
