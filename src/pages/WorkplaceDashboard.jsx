import React from 'react';
import BenchmarkingForm from '../components/BenchmarkingForm';

const WorkplaceDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Arbejdsplads Dashboard</h1>
      <p>Velkommen til arbejdsplads dashboardet. Her kan du dele viden og oprette diskussionsemner.</p>
      <BenchmarkingForm />
    </div>
  );
};

export default WorkplaceDashboard;