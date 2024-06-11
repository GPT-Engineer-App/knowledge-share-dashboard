import React, { useState } from 'react';
import ComparisonChart from './ComparisonChart';

const BenchmarkingForm = () => {
  const [formData, setFormData] = useState({
    metric1: '',
    metric2: '',
    metric3: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Benchmarking Tools</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="metric1">
            Metric 1
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="metric1"
            name="metric1"
            type="text"
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
            type="text"
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
            type="text"
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
      {submittedData && (
        <div className="mt-6">
          <h3 className="mb-4 text-xl font-bold">Comparison Results</h3>
          <ComparisonChart />
        </div>
      )}
    </div>
  );
};

export default BenchmarkingForm;