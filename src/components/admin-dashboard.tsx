"use client";

import { dashboardBarData, dashboardPieData } from "@/data"; // Centralized chart data
import { Award, School, Users } from "lucide-react";
import React, { useState } from "react";
import AdminDashboardCharts from "./admin-dashboard-charts";
import Button from "./button";
import Card from "./card";
import Select from "./select";

const overallStats = {
  totalSchools: 50,
  totalStudents: 10000,
  totalParents: 15000,
  totalAchievements: 5000,
};

const schoolOptions = [
  { value: "1", label: "School A" },
  { value: "2", label: "School B" },
  { value: "3", label: "School C" },
  { value: "4", label: "School D" },
  { value: "5", label: "School E" },
  { value: "6", label: "School F" },
];

const schoolStats = {
  "1": { students: 2000, parents: 3000, achievements: 1000 },
  "2": { students: 1500, parents: 2250, achievements: 750 },
  "3": { students: 1000, parents: 1500, achievements: 500 },
  "4": { students: 1000, parents: 1500, achievements: 500 },
  "5": { students: 1000, parents: 1500, achievements: 500 },
  "6": { students: 1000, parents: 1500, achievements: 500 },
};

const AdminDashboard: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState("");

  const handleSchoolChange = (value: string) => {
    setSelectedSchool(value);
  };

  const handleActionClick = () => {
    // Replace this with your actual action logic
    console.log("Action clicked for school:", selectedSchool);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      {/* Top Section: Overall Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card
          title="Total Schools"
          value={overallStats.totalSchools}
          icon={<School />}
        />
        <Card
          title="Total Students"
          value={overallStats.totalStudents}
          icon={<Users />}
        />
        <Card
          title="Total Parents"
          value={overallStats.totalParents}
          icon={<Users />}
        />
        <Card
          title="Total Achievements"
          value={overallStats.totalAchievements}
          icon={<Award />}
        />
      </div>

      {/* Middle Section: Charts */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <AdminDashboardCharts
          barData={dashboardBarData}
          pieData={dashboardPieData}
        />
      </div>

      {/* Bottom Section: School-Specific Statistics */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="flex flex-col md:flex-row md:items-center mb-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <Select
              options={schoolOptions}
              value={selectedSchool}
              onChange={handleSchoolChange}
              label="Select School"
            />
          </div>
          <div className="w-full md:w-1/2 md:text-right">
            <Button onClick={handleActionClick}>View Details</Button>
          </div>
        </div>

        {selectedSchool && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card
              title="Students"
              value={
                schoolStats[selectedSchool as keyof typeof schoolStats].students
              }
              icon={<Users />}
            />
            <Card
              title="Parents"
              value={
                schoolStats[selectedSchool as keyof typeof schoolStats].parents
              }
              icon={<Users />}
            />
            <Card
              title="Achievements"
              value={
                schoolStats[selectedSchool as keyof typeof schoolStats]
                  .achievements
              }
              icon={<Award />}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
