import React, { useState } from 'react';
import BenchmarkForm from '../components/BenchmarkForm';
import BenchmarkResults from '../components/BenchmarkResults';

const predefinedBenchmarks = {
  metric1: 50,
  metric2: 75,
  metric3: 100,
};

const BenchmarkingTools = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Benchmarking Tools</h1>
      <BenchmarkForm onSubmit={handleFormSubmit} />
      {userData && <BenchmarkResults userData={userData} benchmarkData={predefinedBenchmarks} />}
    </div>
  );
};

export default BenchmarkingTools;