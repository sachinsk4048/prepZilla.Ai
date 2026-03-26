import React from "react";

function SummaryCardSkeleton() {
  return (
    <div className="animate-pulse bg-white border border-gray-200 rounded-xl overflow-hidden">

      <div className="p-4 flex items-center gap-4 bg-gray-100">
        <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>

        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-300 rounded w-40"></div>
          <div className="h-2 bg-gray-300 rounded w-24"></div>
        </div>
      </div>

      <div className="p-4 space-y-3">

        <div className="flex gap-2">
          <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
          <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
        </div>

        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>

      </div>
    </div>
  );
}

export default SummaryCardSkeleton;