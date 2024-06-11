import React, { useState } from 'react';

const initialData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const BenchmarkingTools = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Benchmarking Tools</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Month</th>
            <th className="py-2">UV</th>
            <th className="py-2">PV</th>
            <th className="py-2">AMT</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{entry.name}</td>
              <td className="py-2">{entry.uv}</td>
              <td className="py-2">{entry.pv}</td>
              <td className="py-2">{entry.amt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BenchmarkingTools;