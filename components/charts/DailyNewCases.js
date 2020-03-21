import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';
import data from '../../data';

const DailyNewCases = () => (
  <>
    <h2 style={{ marginTop: 15 }}>Günlük yeni tanı</h2>
    <AreaChart width={600} height={300} data={data} margin={{ top: 15, right: 20, left: 0 }}>
      <CartesianGrid strokeDasharray="5 5" />
      <Area dataKey="positive" type="monotone" stroke="#8884d8" fill="#8884d8" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
    </AreaChart>
  </>
);

export default DailyNewCases