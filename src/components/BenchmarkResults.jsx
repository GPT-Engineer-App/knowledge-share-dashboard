import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BenchmarkResults = ({ userData, benchmarkData }) => {
  const data = [
    { name: 'Metric 1', User: userData.metric1, Benchmark: benchmarkData.metric1 },
    { name: 'Metric 2', User: userData.metric2, Benchmark: benchmarkData.metric2 },
    { name: 'Metric 3', User: userData.metric3, Benchmark: benchmarkData.metric3 },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Comparison Results</h2>
      <BarChart
        width={500}
        height={300}
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
        <Bar dataKey="User" fill="#8884d8" />
        <Bar dataKey="Benchmark" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default BenchmarkResults;