// InterviewPrepAi\frontend\src\components\Inputs\Input.jsx

import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

function Input({ value, onChange, label, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring-2 focus-within:ring-blue-500">

        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={showPassword ? "text" : type}
          className="w-full bg-transparent focus:outline-none"
        />

        {type === "password" && (
          <button type="button" onClick={togglePasswordVisibility}>
            {showPassword ? (
              <FaRegEye size={20} className="text-blue-500 cursor-pointer" />
            ) : (
              <FaRegEyeSlash size={20} className="text-gray-400 cursor-pointer" />
            )}
          </button>
        )}

      </div>
    </div>
  );
}

export default Input;