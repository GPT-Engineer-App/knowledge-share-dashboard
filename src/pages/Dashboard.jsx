import React from 'react';
import TaskList from '../components/TaskList';
import FinancialSummary from '../components/FinancialSummary';
import Meetings from '../components/Meetings';
import ComparisonChart from '../components/ComparisonChart';

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
      <div className="mt-6">
        <h2 className="mb-4 text-2xl font-bold">Performance vs Industry</h2>
        <ComparisonChart />
      </div>
    </div>
  );
};

export default Dashboard;