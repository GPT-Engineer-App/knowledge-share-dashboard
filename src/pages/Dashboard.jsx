import React from 'react';
import TaskList from '../components/TaskList';
import FinancialSummary from '../components/FinancialSummary';
import Meetings from '../components/Meetings';
import ComparisonCharts from '../components/ComparisonCharts';

const data = {
  labels: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'],
  datasets: [
    {
      label: 'Your Performance',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Industry Standard',
      data: [75, 69, 90, 91],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Performance Metrics vs Industry Standards',
    },
  },
};

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-bold">Personlig Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
          <TaskList />
        </div>
        <div className="col-span-1">
          <FinancialSummary />
          <Meetings />
        </div>
      </div>
      <ComparisonCharts data={data} options={options} />
    </div>
  );
};

export default Dashboard;