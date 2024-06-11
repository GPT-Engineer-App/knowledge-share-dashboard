import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const predefinedBenchmarks = {
  metric1: 50,
  metric2: 75,
  metric3: 100,
};

const BenchmarkingTools = () => {
  const [formData, setFormData] = useState({
    metric1: '',
    metric2: '',
    metric3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const data = {
    labels: ['Metric 1', 'Metric 2', 'Metric 3'],
    datasets: [
      {
        label: 'User Data',
        data: [formData.metric1, formData.metric2, formData.metric3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Benchmark',
        data: [predefinedBenchmarks.metric1, predefinedBenchmarks.metric2, predefinedBenchmarks.metric3],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Benchmarking Tools</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="metric1">
            Metric 1
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="metric1"
            name="metric1"
            type="number"
            placeholder="Enter value for Metric 1"
            value={formData.metric1}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="metric2">
            Metric 2
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="metric2"
            name="metric2"
            type="number"
            placeholder="Enter value for Metric 2"
            value={formData.metric2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="metric3">
            Metric 3
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="metric3"
            name="metric3"
            type="number"
            placeholder="Enter value for Metric 3"
            value={formData.metric3}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
      <Bar data={data} />
    </div>
  );
};

export default BenchmarkingTools;