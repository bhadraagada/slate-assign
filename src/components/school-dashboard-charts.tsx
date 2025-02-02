"use client";

import { dashboardBarData } from "@/data";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Dummy data for the Line Chart: Achievements over the last decade
const decadeAchievementsData = [
  { year: "2013", achievements: 120 },
  { year: "2014", achievements: 150 },
  { year: "2015", achievements: 180 },
  { year: "2016", achievements: 170 },
  { year: "2017", achievements: 200 },
  { year: "2018", achievements: 220 },
  { year: "2019", achievements: 250 },
  { year: "2020", achievements: 230 },
  { year: "2021", achievements: 260 },
  { year: "2022", achievements: 300 },
];

const donutData = [
  { name: "Division A", value: 400 },
  { name: "Division B", value: 300 },
  { name: "Division C", value: 300 },
  { name: "Division D", value: 200 },
];

const scatterData = [
  { age: 8, achievements: 15 },
  { age: 10, achievements: 3 },
  { age: 10, achievements: 5 },
  { age: 5, achievements: 2 },
  { age: 11, achievements: 1 },
  { age: 16, achievements: 8 },
  { age: 16, achievements: 12 },
  { age: 16, achievements: 6 },
  { age: 17, achievements: 20 },
  { age: 17, achievements: 18 },
  { age: 17, achievements: 7 },
];

const stackedBarData = [
  { school: "School A", Male: 120, Female: 80 },
  { school: "School B", Male: 90, Female: 110 },
  { school: "School C", Male: 75, Female: 125 },
];

const radialData = [
  { name: "Excellent", value: 400, fill: "#8884d8" },
  { name: "Good", value: 300, fill: "#83a6ed" },
  { name: "Average", value: 300, fill: "#8dd1e1" },
  { name: "Below Average", value: 200, fill: "#82ca9d" },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SchoolDashboardCharts: React.FC = () => {
  return (
    <div className="space-y-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Achievements Over the Last Decade
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={decadeAchievementsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="achievements" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Achievements Comparison Between Schools
        </h2>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dashboardBarData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="achievements" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md h-96 pb-16">
        <h2 className="text-xl font-semibold mb-4">Achievements by Division</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={donutData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={80}
              label
            >
              {donutData.map((entry, index) => (
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
      <div className="bg-white p-6 rounded-lg shadow-md h-96 pb-16">
        <h2 className="text-xl font-semibold mb-4">
          Age vs. Achievements
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="age" name="Age" unit="yrs" />
            <YAxis type="number" dataKey="achievements" name="Achievements" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={scatterData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md h-96 pb-10">
      <h2 className="text-xl font-semibold mb-4">
        Gender Distribution by School
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={stackedBarData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="school" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Male" stackId="a" fill="#8884d8" />
          <Bar dataKey="Female" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md h-96 ">
      <h2 className="text-xl font-semibold mb-4">
        Achievements Distribution by Performance
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="100%"
          data={radialData}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={30}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SchoolDashboardCharts;
