import React from 'react';
import { Pie, Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function Dashboard() {
  const pieData = {
    labels: ['Accepted', 'Offered', 'Applied', 'Rejected', 'Interview Scheduled'],
    datasets: [
      {
        data: [22, 33, 35, 39, 36],
        backgroundColor: [
          '#BFDBFE', 
          '#93C5FD', 
          '#60A5FA', 
          '#3B82F6', 
          '#1D4ED8', 
        ],
      },
    ],
  };


  const pieOptions = {
    plugins: {
      legend: {
        position: 'top', 
        align: 'center', 
        labels: {
          boxWidth: 15, 
          padding: 20,  
        },
      },
    },
    maintainAspectRatio: false, 
  };


  const barData = {
    labels: ['Google', 'Salesforce', 'Nvidia', 'Amazon', 'Tesla'],
    datasets: [
      {
        label: 'Number of Applications',
        data: [10, 8, 7, 12, 24],
        backgroundColor: [
          '#BFDBFE', 
          '#93C5FD', 
          '#60A5FA', 
          '#3B82F6', 
          '#1D4ED8', 
        ],
      },
    ],
  };


  const lineData = {
    labels: ['LinkedIn', 'Indeed', 'Company Website', 'Referrals', 'Others'],
    datasets: [
      {
        label: 'Application Sources',
        data: [40, 25, 20, 10, 5],
        borderColor: '#3B82F6', 
        backgroundColor: '#3B82F6',
        fill: false, 
      },
    ],
  };


  const horizontalBarData = {
    labels: ['JavaScript', 'Python', 'Java', 'C++', 'SQL'],
    datasets: [
      {
        label: 'Skill Count',
        data: [30, 40, 25, 20, 15],
        backgroundColor: [
          '#BFDBFE', 
          '#93C5FD', 
          '#60A5FA', 
          '#3B82F6', 
          '#1D4ED8', 
        ],
      },
    ],
  };

  const horizontalBarOptions = {
    indexAxis: 'y', 
    plugins: {
      legend: {
        display: false, 
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col min-h-[250px] h-full">
          <h2 className="text-lg font-bold mb-2">Applications Count by Status</h2>
          <div className="flex-grow flex items-center justify-center">
            <div className="w-[350px] h-[350px]"> 
              <Pie data={pieData} options={pieOptions} />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col min-h-[250px] h-full">
          <h2 className="text-lg font-bold mb-2">Companies Applied To</h2>
          <div className="flex-grow">
            <Bar data={barData} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col min-h-[250px] h-full">
          <h2 className="text-lg font-bold mb-2">Application Sources</h2>
          <div className="flex-grow">
            <Line data={lineData} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col min-h-[250px] h-full">
          <h2 className="text-lg font-bold mb-2">Top Skills</h2>
          <div className="flex-grow">
            <Bar data={horizontalBarData} options={horizontalBarOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;