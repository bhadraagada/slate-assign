"use client"

import type React from "react"
import StudentProfileCard from "@/components/student-profile"
import PerformanceChart from "@/components/performance-chart"
import AchievementList from "@/components/achievment-list"
import NotificationCard from "@/components/notification-card"
import { studentData, performanceData, achievements, notifications } from "@/data"

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Student Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <StudentProfileCard {...studentData} />

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Performance Trend</h2>
            <PerformanceChart data={performanceData} />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Achievements</h2>
            <AchievementList achievements={achievements} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications & Updates</h2>
            {notifications.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

