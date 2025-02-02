import type React from "react";

interface ParentProfileCardProps {
  name: string;
  email: string;
  profilePicture?: string;
  connectedChildrenCount: number;
  totalAchievements: number;
}

const ParentProfileCard: React.FC<ParentProfileCardProps> = ({
  name,
  email,
  connectedChildrenCount,
  totalAchievements,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <div className="size-20 text-2xl font-bold mr-5  bg-gray-300 rounded-full flex items-center justify-center">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">Connected Children</p>
          <p className="text-2xl font-semibold">{connectedChildrenCount}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Total Achievements</p>
          <p className="text-2xl font-semibold">{totalAchievements}</p>
        </div>
      </div>
    </div>
  );
};

export default ParentProfileCard;
