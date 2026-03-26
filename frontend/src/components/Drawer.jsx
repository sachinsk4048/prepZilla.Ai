import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuX } from "react-icons/lu";

function Drawer({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP (NO BLUR) */}
          <motion.div
 className="fixed inset-0 bg-transparent z-30"             initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* DRAWER */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="fixed top-[64px] right-0 z-40 h-[calc(100vh-64px)] w-full md:w-[40vw] p-[1px]"
          >
            {/* 🌈 gradient border (same as before) */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-30 "></div>

            {/* MAIN PANEL */}
            <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl overflow-y-auto">
              {/* ❌ rounded-l-3xl REMOVE kar diya */}

              {/* HEADER */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/30">
                <h5 className="text-lg font-semibold text-gray-900 tracking-wide">
                  {title || "AI Explanation"}
                </h5>

                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition"
                >
                  <LuX className="text-lg" />
                </button>
              </div>

              {/* CONTENT */}
              <div className="px-5 py-4 text-sm">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Drawer;