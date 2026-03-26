import React from "react";
import { LuBriefcase, LuClock, LuMessageCircle } from "react-icons/lu";

function RoleInfoHeader({
  role,
  topicsToFocus,
  experience,
  questions,
  lastUpdated,
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/20 bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* ✨ PREMIUM GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-40px] right-10 w-56 h-56 bg-purple-400/40 blur-[120px] animate-pulse"></div>
        <div className="absolute top-0 right-32 w-56 h-56 bg-blue-400/40 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-40px] right-16 w-56 h-56 bg-pink-400/40 blur-[120px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 py-6 md:py-8 relative z-10">

        {/* 🔥 BADGE */}
        <div className="inline-flex items-center px-3 py-[3px] rounded-full text-[10px] md:text-xs font-semibold 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md mb-2 tracking-wide">
          ✨ Interview Role
        </div>

        {/* 🎯 TITLE */}
        <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            {role}
          </span>
        </h1>

        {/* 📝 TOPICS */}
        <p className="mt-1 text-gray-600 text-[12px] md:text-sm max-w-xl line-clamp-2">
          {topicsToFocus}
        </p>

        {/* ⚡ GLASS CHIPS */}
        <div className="flex flex-wrap gap-2 mt-4">

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg 
          bg-white/70 backdrop-blur-md border border-white/40 shadow-sm 
          text-[11px] md:text-xs font-medium text-gray-700 hover:scale-105 transition">
            <LuBriefcase size={14} className="text-indigo-500" />
            {experience} {experience === 1 ? "Yr" : "Yrs"}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg 
          bg-white/70 backdrop-blur-md border border-white/40 shadow-sm 
          text-[11px] md:text-xs font-medium text-gray-700 hover:scale-105 transition">
            <LuMessageCircle size={14} className="text-purple-500" />
            {questions}
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg 
          bg-white/70 backdrop-blur-md border border-white/40 shadow-sm 
          text-[11px] md:text-xs font-medium text-gray-700 hover:scale-105 transition">
            <LuClock size={14} className="text-pink-500" />
            {lastUpdated}
          </div>

        </div>
      </div>
    </div>
  );
}

export default RoleInfoHeader;