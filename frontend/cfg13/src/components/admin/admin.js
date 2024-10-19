import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import Navbar from "../navBars/adminNavBar";

const trendData = [
  { date: "2024-09-19", active: 320, inactive: 42, submitted: 180 },
  { date: "2024-09-21", active: 290, inactive: 37, submitted: 210 },
  { date: "2024-09-24", active: 275, inactive: 45, submitted: 160 },
  { date: "2024-09-26", active: 310, inactive: 33, submitted: 200 },
  { date: "2024-09-30", active: 340, inactive: 30, submitted: 250 },
  { date: "2024-10-03", active: 355, inactive: 35, submitted: 190 },
  { date: "2024-10-08", active: 380, inactive: 50, submitted: 288 },
  { date: "2024-10-12", active: 330, inactive: 20, submitted: 150 },
  { date: "2024-10-15", active: 400, inactive: 38, submitted: 220 },
  { date: "2024-10-19", active: 370, inactive: 32, submitted: 210 },
];

const ghostJobsData = [
  { date: "2024-09-19", ghost: 5 },
  { date: "2024-09-21", ghost: 10 },
  { date: "2024-09-24", ghost: 7 },
  { date: "2024-09-26", ghost: 15 },
  { date: "2024-09-30", ghost: 6 },
  { date: "2024-10-03", ghost: 9 },
  { date: "2024-10-08", ghost: 12 },
  { date: "2024-10-12", ghost: 4 },
  { date: "2024-10-15", ghost: 8 },
  { date: "2024-10-19", ghost: 7 },
];

const cumulativeData = [
  { date: "2024-09-19", applications: 180, roles: 30 },
  { date: "2024-09-21", applications: 210, roles: 28 },
  { date: "2024-09-24", applications: 160, roles: 34 },
  { date: "2024-09-26", applications: 200, roles: 32 },
  { date: "2024-09-30", applications: 250, roles: 30 },
  { date: "2024-10-03", applications: 190, roles: 35 },
  { date: "2024-10-08", applications: 288, roles: 36 },
  { date: "2024-10-12", applications: 150, roles: 31 },
  { date: "2024-10-15", applications: 220, roles: 29 },
  { date: "2024-10-19", applications: 210, roles: 33 },
];

const yellowColors = ["#FEF08A", "#FDE047", "#FACC15", "#EAB308", "#CA8A04"];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />
      <div className="ht-42 mt-4 mb-10 text-2xl text-center">Admin Metrics</div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Trend Over Time</h3>
          <LineChart width={550} height={300} data={trendData}>
            <Line type="monotone" dataKey="active" stroke="#FBBF24" />
            <Line type="monotone" dataKey="inactive" stroke="#F59E0B" />
            <Line type="monotone" dataKey="submitted" stroke="#D97706" />
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Ghost Jobs Over Time</h3>
          <BarChart width={550} height={300} data={ghostJobsData}>
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="ghost">
              {ghostJobsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={yellowColors[index % yellowColors.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Cumulative Trend of Applications and Roles
          </h3>
          <AreaChart width={1250} height={250} data={cumulativeData}>
            <Area type="monotone" dataKey="applications" stroke="#FBBF24" fill="#FEF3C7" />
            <Area type="monotone" dataKey="roles" stroke="#F59E0B" fill="#FDE68A" />
            <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
