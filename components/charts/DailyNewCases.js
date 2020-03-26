import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import data from '../../data';

const DailyNewCases = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Yeni tanı</h2>
    <ResponsiveContainer width={600} aspect={2}>
      <AreaChart id="dailyNewCasesChart" data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey="positive" type="monotone" stroke="#8884d8" fill="#8884d8" />
        <XAxis dataKey="date" />
        <YAxis />((
        <Tooltip
          labelFormatter={(value) => `${value} tarihindeki yeni vaka` }
          formatter={(value) => [value, '']} 
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);

export default DailyNewCases;
