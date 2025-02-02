import type React from "react"

interface SelectOption {
  id: string
  label: string
}

interface SelectProps {
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  label: string
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, label }) => {
  return (
    <div className="w-full max-w-xs">
      <label htmlFor="school-select" className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        id="school-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select a school</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select

