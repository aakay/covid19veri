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

const TotalCases = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Toplam vaka</h2>
    <ResponsiveContainer width={600} aspect={1.5}>
      <AreaChart id="dailyCasesChart" data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey="cases" type="monotone" stroke="#8884d8" fill="#8884d8" />
        <XAxis
          dataKey="date"
          interval={0}
          height={100}
          tick={<CustomizedAxisTick />}
        />
        <YAxis />
        <Tooltip
          labelFormatter={(value) => `${value} tarihindeki toplam vaka`}
          formatter={(value) => [value, '']}
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default TotalCases;
