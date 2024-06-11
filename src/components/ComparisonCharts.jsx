import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Performance: 4000, Industry: 2400 },
  { name: 'Feb', Performance: 3000, Industry: 1398 },
  { name: 'Mar', Performance: 2000, Industry: 9800 },
  { name: 'Apr', Performance: 2780, Industry: 3908 },
  { name: 'May', Performance: 1890, Industry: 4800 },
  { name: 'Jun', Performance: 2390, Industry: 3800 },
  { name: 'Jul', Performance: 3490, Industry: 4300 },
];

const ComparisonCharts = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Performance vs Industry Standards</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Performance" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Industry" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonCharts;