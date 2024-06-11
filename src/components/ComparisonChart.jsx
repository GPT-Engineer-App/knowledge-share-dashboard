import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', User: 4000, Industry: 2400 },
  { name: 'Feb', User: 3000, Industry: 1398 },
  { name: 'Mar', User: 2000, Industry: 9800 },
  { name: 'Apr', User: 2780, Industry: 3908 },
  { name: 'May', User: 1890, Industry: 4800 },
  { name: 'Jun', User: 2390, Industry: 3800 },
  { name: 'Jul', User: 3490, Industry: 4300 },
];

const ComparisonChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="User" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Industry" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ComparisonChart;