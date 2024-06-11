import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BenchmarkingResults = ({ data }) => {
  const benchmarks = {
    metric1: 50,
    metric2: 75,
    metric3: 100,
  };

  const chartData = [
    {
      name: 'Metrik 1',
      User: data.metric1,
      Benchmark: benchmarks.metric1,
    },
    {
      name: 'Metrik 2',
      User: data.metric2,
      Benchmark: benchmarks.metric2,
    },
    {
      name: 'Metrik 3',
      User: data.metric3,
      Benchmark: benchmarks.metric3,
    },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Sammenligningsresultater</h2>
      <BarChart
        width={600}
        height={300}
        data={chartData}
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

export default BenchmarkingResults;