import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import { Clock } from "lucide-react";

// Example plant care related stats
const wateringStats = [
  { day: "Mon", watered: 5 },
  { day: "Tue", watered: 8 },
  { day: "Wed", watered: 6 },
  { day: "Thu", watered: 7 },
  { day: "Fri", watered: 9 },
];

const newPlantsAdded = [
  { month: "Jan", count: 4 },
  { month: "Feb", count: 7 },
  { month: "Mar", count: 3 },
  { month: "Apr", count: 9 },
  { month: "May", count: 6 },
];

const plantHealthScore = [
  { month: "Jan", score: 70 },
  { month: "Feb", score: 75 },
  { month: "Mar", score: 80 },
  { month: "Apr", score: 85 },
  { month: "May", score: 90 },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Watering Activity Card */}
      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-lg font-semibold text-green-700">Watering Activity</h2>
        <p className="text-sm text-gray-600 mb-4">Number of plants watered daily</p>
        <div className="h-36">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={wateringStats}>
              <XAxis dataKey="day" stroke="#16a34a" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="watered" fill="#22c55e" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-xs text-gray-500 mt-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-green-500" />
          <span>Last updated 1 hour ago</span>
        </div>
      </div>

      {/* New Plants Added Card */}
      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-lg font-semibold text-green-700">New Plants Added</h2>
        <p className="text-sm text-gray-600 mb-4">Monthly plant additions</p>
        <div className="h-36 border p-3 rounded border-green-300">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={newPlantsAdded}>
              <XAxis dataKey="month" stroke="#16a34a" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-xs text-gray-500 mt-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-green-500" />
          <span>Updated yesterday</span>
        </div>
      </div>

      {/* Plant Health Score Card */}
      <div className="bg-white shadow rounded-lg p-5">
        <h2 className="text-lg font-semibold text-green-700">Plant Health Score</h2>
        <p className="text-sm text-gray-600 mb-4">Average monthly health rating</p>
        <div className="h-36">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={plantHealthScore}>
              <XAxis dataKey="month" stroke="#16a34a" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-xs text-gray-500 mt-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-green-500" />
          <span>Just updated</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
