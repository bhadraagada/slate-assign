import type React from "react"

export interface Notification {
  id: string
  title: string
  message: string
  date: string
  type: "info" | "warning" | "success"
}

interface NotificationCardProps {
  notification: Notification
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notification }) => {
  const typeColors = {
    info: "bg-blue-100 border-blue-500 text-blue-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    success: "bg-green-100 border-green-500 text-green-700",
  }

  return (
    <div className={`border-l-4 p-4 mb-4 ${typeColors[notification.type]}`}>
      <div className="flex justify-between">
        <h3 className="font-bold">{notification.title}</h3>
        <span className="text-sm">{notification.date}</span>
      </div>
      <p className="mt-2">{notification.message}</p>
    </div>
  )
}

export default NotificationCard

