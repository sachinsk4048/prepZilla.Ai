import React from "react";
import { LuTrash2 } from "react-icons/lu";
import { motion } from "framer-motion";
import { getInitials } from "../../utils/helper";

function SummaryCard({
  colors,
  role,
  topicToFocus,
  experience,
  questions,
  description,
  lastUpdated,
  onSelect,
  onDelete,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      onClick={onSelect}
      className="group relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 transition-all duration-300"
    >
      {/* CARD */}
      <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">

        {/* TOP */}
        <div
          className="relative p-4 flex items-start gap-4"
          style={{ background: colors.bgcolor }}
        >

          {/* glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 blur-xl"></div>

          {/* avatar */}
          <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center font-semibold shadow-md">
            {getInitials(role)}
          </div>

          {/* title */}
          <div className="relative z-10 flex-grow">
            <h2 className="text-[16px] font-semibold capitalize text-gray-900">
              {role}
            </h2>

            <p className="text-xs text-gray-700 mt-1">
              {topicToFocus}
            </p>
          </div>

          {/* delete */}
          <button
            className="hidden group-hover:flex relative z-10 text-rose-500 bg-white shadow-md border border-gray-200 rounded-lg p-1 hover:bg-rose-50"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <LuTrash2 size={16} />
          </button>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col justify-between flex-grow p-4">

          {/* chips */}
          <div className="flex flex-wrap gap-2 mb-3">

            <div className="text-[11px] px-3 py-1 bg-gray-100 border border-gray-200 rounded-full">
              Experience: {experience} {experience === 1 ? "Year" : "Years"}
            </div>

            <div className="text-[11px] px-3 py-1 bg-gray-100 border border-gray-200 rounded-full">
              {questions} Q&A
            </div>

            <div className="text-[11px] px-3 py-1 bg-gray-100 border border-gray-200 rounded-full">
              Updated: {lastUpdated}
            </div>

          </div>

          {/* description (fixed height for equal cards) */}
          <p className="text-sm text-gray-500 line-clamp-2 min-h-[42px]">
            {description}
          </p>

        </div>

      </div>
    </motion.div>
  );
}

export default SummaryCard;