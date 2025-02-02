"use client";

import Card from "@/components/card";
import DataTable from "@/components/data-table";
import SchoolDashboardCharts from "@/components/school-dashboard-charts";
import SearchInput from "@/components/search-input";
import Select from "@/components/select";
import { schools, students } from "@/data";
import { MedalIcon, UserIcon } from "lucide-react";
import type React from "react";
import { useMemo, useState } from "react";

const SchoolPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string>("");

  const filteredStudents = useMemo(() => {
    if (!selectedSchool) return [];
    return students.filter(
      (student) =>
        student.schoolId === selectedSchool &&
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [selectedSchool, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        School Dashboard
      </h1>

      <div className="mb-8">
        <Select
          options={schools}
          value={selectedSchool}
          onChange={setSelectedSchool}
          label="Select School"
        />
      </div>

      {selectedSchool && (
        <>
          <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card
              title="Total Students"
              value={filteredStudents.length}
              icon={<UserIcon />}
            />
            <Card title="Total Achievements" value={50} icon={<MedalIcon />} />
            <Card title="Total Achievements" value={50} icon={<MedalIcon />} />
            <Card title="Total Achievements" value={50} icon={<MedalIcon />} />
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <SearchInput onChange={setSearchTerm} value={searchTerm} />
            <DataTable students={filteredStudents} />
          </div>
          <div className="bg-white shadow-md rounded-lg p-8 mt-8 w-full">
            <SchoolDashboardCharts />
          </div>
        </>
      )}

      {!selectedSchool && (
        <p className="text-gray-600">
          Please select a school to view student data.
        </p>
      )}
    </div>
  );
};

export default SchoolPage;
