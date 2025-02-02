import type React from "react"

export interface Student {
  id: string
  name: string
  rollNo: string
  age: number
  std: string
  division: string
  achievementsCount: number
}

interface StudentTableProps {
  students: Student[]
}

const StudentTable: React.FC<StudentTableProps> = ({ students }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Roll No
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Class
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Division
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Achievements
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.rollNo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.std}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.division}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.achievementsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable

