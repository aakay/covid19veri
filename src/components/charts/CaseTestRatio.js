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

const CaseTestRatio = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Günlük vaka/test oranı</h2>
    <p style={{ marginTop: 5 }}>Not: Test bilgisi eksikse o gün için veri gösterilmemiştir</p>
    <ResponsiveContainer width={800} aspect={2}>
      <AreaChart id="dailyNewLossesChart" data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey="caseToTestRatio" type="monotone" stroke="#00a6a3" fill="#00a6a3" />
        <XAxis
          dataKey="date"
          height={100}
          tick={<CustomizedAxisTick />}
        />
        <YAxis />((
        <Tooltip
          labelFormatter={(value) => `${value} tarihindeki vaka/test oranı`}
          formatter={(value) => [getValueInPercent(value), '']}
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default CaseTestRatio;
