import React from 'react';
import { Bar } from 'react-chartjs-2';

const ComparisonChart = ({ data }) => {
  const chartData = {
    labels: data.categories,
    datasets: data.series.map(series => ({
      label: series.name,
      data: series.data,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1
    }))
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ComparisonChart;