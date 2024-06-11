import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ComparisonCharts = ({ data, options }) => {
  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Performance Metrics</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ComparisonCharts;