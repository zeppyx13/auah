import React from "react";

const UserInput = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  className,
  inputMode,
  Isdisabled,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        disabled={Isdisabled}
        autoComplete="off"
        required
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        className={`w-full px-5 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all ${className}`}
      />
    </div>
  );
};

export default UserInput;
