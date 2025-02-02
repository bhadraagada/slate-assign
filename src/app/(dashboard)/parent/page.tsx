"use client"

import type React from "react"
import { useState, useMemo } from "react"
import ParentProfileCard from "@/components/parent-proflie"
import StudentTable from "@/components/student-table"
import SearchInput from "@/components/search-input"
import AchievementsChart from "@/components/achievments-chart-student"
import { parentData, connectedStudents, achievementsData } from "@/data"

const ParentPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = useMemo(() => {
    return connectedStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Parent Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ParentProfileCard {...parentData} />
          <AchievementsChart data={achievementsData} />
        </div>
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Connected Students</h2>
            <SearchInput value={searchTerm} onChange={setSearchTerm} />
            <StudentTable students={filteredStudents} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentPage

