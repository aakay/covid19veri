import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, Area, XAxis, YAxis, Tooltip } from 'recharts';
import data from '../data';
import CustomizedAxisTick from './CustomizedAxisTick';

export default ({ id, chartDataKey, headerText, labelFormatter, formatter, notes }) => (
  <>
    <h2 style={{ marginTop: 15 }}>{headerText}</h2>
    {notes && (<p>{notes}</p>)}
    <ResponsiveContainer width="100%" aspect={1.75}>
      <AreaChart id={id} data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <Area dataKey={chartDataKey} type="monotone" stroke="#00a6a3" fill="#00a6a3" />
        <XAxis
          dataKey="date"
          height={50}
          tick={<CustomizedAxisTick />}
        />
        <YAxis />
        <Tooltip
          labelFormatter={labelFormatter}
          formatter={formatter ? formatter : (value) => [value, '']}
          separator=""
        />
      </AreaChart>
    </ResponsiveContainer>
  </>
);