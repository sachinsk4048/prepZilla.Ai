// InterviewPrepAi\frontend\src\components\Loader\SpinnerLoader.jsx
import React from "react";

function SpinnerLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-6 h-6">

        {/* Outer soft glow ring */}
        <div className="absolute inset-0 rounded-full border border-gray-200"></div>

        {/* Animated gradient arc */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent 
          border-t-blue-500 border-r-purple-500 
          animate-spin"></div>

        {/* Inner subtle pulse dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-gray-700 rounded-full animate-pulse"></div>
        </div>

      </div>
    </div>
  );
}

export default SpinnerLoader;