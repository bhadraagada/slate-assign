import type React from "react"

export interface Achievement {
  id: string
  title: string
  date: string
  description: string
}

interface AchievementListProps {
  achievements: Achievement[]
}

const AchievementList: React.FC<AchievementListProps> = ({ achievements }) => {
  return (
    <div className="space-y-4">
      {achievements.map((achievement) => (
        <div key={achievement.id} className="bg-white shadow-sm rounded-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
          <p className="text-sm text-gray-500">{achievement.date}</p>
          <p className="mt-2 text-gray-600">{achievement.description}</p>
        </div>
      ))}
    </div>
  )
}

export default AchievementList

