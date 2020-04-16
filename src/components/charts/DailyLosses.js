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

const DailyLosses = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Günlük kayıp</h2>
    <ResponsiveContainer width={800} aspect={2}>
      <AreaChart id="dailyNewLossesChart" data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey="dailyLoss" type="monotone" stroke="#00a6a3" fill="#00a6a3" />
        <XAxis
          dataKey="date"
          height={100}
          tick={<CustomizedAxisTick />}
        />
        <YAxis />((
        <Tooltip
          labelFormatter={(value) => `${value} tarihindeki kayıp`}
          formatter={(value) => [value, '']}
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default DailyLosses;
