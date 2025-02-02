import type React from "react";

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, label }) => {
  return (
    <div className="w-full">
      <label
        htmlFor="select"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id="select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full mt-1 rounded-md p-2 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        <option value="">Select a school</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
