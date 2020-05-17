import React from 'react';
import { ResponsiveContainer, AreaChart, CartesianGrid, Area, XAxis, YAxis, Tooltip } from 'recharts';
import data from '../data';
import CustomizedAxisTick from './CustomizedAxisTick';

const colors = ['#00a6a3', '#8884d8']

export default ({ id, chartDataKeys, headerText, labelFormatter, formatter, notes, content }) => (
  <>
    <h2 style={{ marginTop: 15 }}>{headerText}</h2>
    {notes && (<p>{notes}</p>)}
    <ResponsiveContainer width="100%" aspect={1.75}>
      <AreaChart id={id} data={data} margin={{ top: 15, right: 20, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        {chartDataKeys.map((chartDataKey, index) => (
          <Area
            dataKey={chartDataKey}
            type="monotone"
            connectNulls={true}
            stroke={colors[index]}
            fill={colors[index]}
            fillOpacity={0.1}
          />
        ))}
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