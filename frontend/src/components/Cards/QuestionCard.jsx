import React, { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from "react-icons/lu";
import AIResponsePreview from "../../Pages/InterviewPrep/components/AIResponsePreview";

function QuestionCard({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isExpanded) {
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight + 12);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`group relative rounded-xl p-[1px] transition-all duration-300 mb-3
      ${
        isPinned
          ? "bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300"
          : "bg-gradient-to-br from-blue-200 via-purple-200 to-indigo-200 hover:from-blue-300 hover:via-purple-300 hover:to-indigo-300"
      }`}
    >
      <div
        className={`bg-white rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 relative ${
          isPinned ? "border-l-4 border-orange-400" : ""
        }`}
      >
        {/* QUESTION ROW */}
        <div className="flex items-start justify-between cursor-pointer">
          <div className="flex items-start gap-2 md:gap-3.5">
            <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 text-[10px] md:text-xs font-bold rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow">
              Q
            </span>

            <h3
              onClick={toggleExpand}
              className={`
                text-[13px] md:text-[15px] font-medium text-gray-800 mr-2 leading-snug transition
                hover:text-blue-600
                ${!isExpanded ? "line-clamp-2" : ""}
              `}
            >
              {question}
            </h3>
          </div>

          <div className="flex items-center justify-end ml-2 md:ml-4 relative">
            <div
              className={`flex ${
                isExpanded ? "flex" : "hidden group-hover:flex"
              }`}
            >
              {/* PIN BUTTON */}
              <button
                onClick={onTogglePin}
                className={`flex items-center justify-center gap-1 text-[10px] md:text-xs font-semibold w-[70px] md:w-[90px] h-[28px] md:h-[32px] mr-1 md:mr-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 ${
                  isPinned
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white"
                    : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700"
                }`}
              >
                {isPinned ? <LuPinOff size={12} /> : <LuPin size={12} />}
                <span className="hidden md:block">
                  {isPinned ? "Unpin" : "Pin"}
                </span>
              </button>

              {/* LEARN MORE BUTTON */}
              <button
                onClick={() => {
                  setIsExpanded(true);
                  onLearnMore();
                }}
                className="flex items-center justify-center gap-1 text-[10px] md:text-xs font-semibold w-[90px] md:w-[120px] h-[28px] md:h-[32px] mr-1 md:mr-2 rounded-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <LuSparkles size={12} className="animate-pulse" />
                <span className="hidden md:block">Learn More</span>
              </button>
            </div>

            {/* EXPAND BUTTON */}
            <button
              className="text-gray-400 hover:text-gray-600 transition"
              onClick={toggleExpand}
            >
              <LuChevronDown
                size={18}
                className={`transform transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* ANSWER */}
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: `${height}px` }}
        >
          <div
            className="relative mt-3 md:mt-4 rounded-xl bg-gradient-to-br from-gray-50 to-white px-4 py-3 md:px-5 md:py-4 border border-gray-200 overflow-hidden"
            ref={contentRef}
          >
            {/* SHIMMER */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="shimmer opacity-40"></div>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent"></div>

            {/* CONTENT */}
            <div className="relative z-10 text-[13px] md:text-[14px] text-gray-700 leading-relaxed">
              <AIResponsePreview content={answer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;