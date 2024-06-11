import React, { useState } from 'react';
import BenchmarkingForm from '../components/BenchmarkingForm';
import BenchmarkingResults from '../components/BenchmarkingResults';

const BenchmarkingTools = () => {
  const [data, setData] = useState(null);

  const handleFormSubmit = (formData) => {
    setData(formData);
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Benchmarking Tools</h1>
      <BenchmarkingForm onSubmit={handleFormSubmit} />
      {data && <BenchmarkingResults data={data} />}
    </div>
  );
};

export default BenchmarkingTools;