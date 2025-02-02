"use client";

import React from "react";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Line,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Define interfaces for the data objects.
export interface BarDataItem {
  name: string;
  achievements: number;
}

export interface PieDataItem {
  name: string;
  value: number;
}

// Define the props interface for the AdminDashboardCharts component.
export interface AdminDashboardChartsProps {
  barData: BarDataItem[];
  pieData: PieDataItem[];
}

// Colors for the PieChart slices
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const radarData = [
  {
    subject: "Achievements",
    SchoolA: 1000,
    SchoolB: 750,
    SchoolC: 500,
    fullMark: 1500,
  },
  {
    subject: "Students",
    SchoolA: 2000,
    SchoolB: 1500,
    SchoolC: 1000,
    fullMark: 2500,
  },
  {
    subject: "Parents",
    SchoolA: 3000,
    SchoolB: 2250,
    SchoolC: 1500,
    fullMark: 3500,
  },
];

const composedData = [
  { name: "Jan", achievements: 400, students: 240, parents: 240 },
  { name: "Feb", achievements: 300, students: 139, parents: 221 },
  { name: "Mar", achievements: 500, students: 980, parents: 229 },
  { name: "Apr", achievements: 200, students: 390, parents: 200 },
  { name: "May", achievements: 278, students: 480, parents: 218 },
  { name: "Jun", achievements: 189, students: 380, parents: 250 },
];

export const AdminDashboardCharts: React.FC<AdminDashboardChartsProps> = ({
  barData,
  pieData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
      {/* Bar Chart Section */}
      <div className="w-full h-64">
        <h2 className="text-lg font-semibold mb-4">
          Achievements by Top 6 School
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="achievements" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart Section */}
      <div className="w-full h-64">
        <h2 className="text-lg font-semibold mb-4">Overall Distribution</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-80">
        <h2 className="text-lg font-semibold mb-4">Monthly Comparison</h2>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={composedData}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="parents"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="achievements" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="students" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full h-80">
        <h2 className="text-lg font-semibold mb-4">Performance Comparison</h2>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius={90} data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 1500]} />
            <Radar
              name="School A"
              dataKey="SchoolA"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="School B"
              dataKey="SchoolB"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Radar
              name="School C"
              dataKey="SchoolC"
              stroke="#ffc658"
              fill="#ffc658"
              fillOpacity={0.6}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminDashboardCharts;
