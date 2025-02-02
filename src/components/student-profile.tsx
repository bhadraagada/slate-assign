import type React from "react";

interface StudentProfileCardProps {
  name: string;
  rollNumber: string;
  classStandard: string;
  section: string;
  totalAchievements: number;
  averageScore: number;
  profilePicture: string;
}

const StudentProfileCard: React.FC<StudentProfileCardProps> = ({
  name,
  rollNumber,
  classStandard,
  section,
  totalAchievements,
  averageScore,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
      <div className="size-20 text-2xl font-bold mr-5  bg-gray-300 rounded-full flex items-center justify-center">
        {name.charAt(0).toUpperCase()}
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">Roll Number: {rollNumber}</p>
        <p className="text-gray-600">
          Class: {classStandard} - Section: {section}
        </p>
        <div className="mt-4 flex justify-center md:justify-start space-x-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Achievements</p>
            <p className="text-xl font-semibold text-blue-600">
              {totalAchievements}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Average Score</p>
            <p className="text-xl font-semibold text-green-600">
              {averageScore}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileCard;
