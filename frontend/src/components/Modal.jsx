// Modal.jsx

import React from "react";

function Modal({
  children,
  isOpen,
  onClose,
  title,
  hideHeader,
  className = "",
  centered = true
}) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex justify-center px-4 bg-black/50 backdrop-blur-sm overflow-y-auto
      ${centered ? "items-center" : "items-start pt-28 pb-10"}`}
    >

      <div
        className={`
        w-full
        max-w-lg
        bg-white/20
        backdrop-blur-xl
        border border-white/30
        rounded-2xl
        shadow-2xl
        p-6
        relative
        ${className}
        `}
      >
        {!hideHeader && (
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold text-white">{title}</h2>

            <button
              onClick={onClose}
              className="text-white text-xl hover:scale-110 transition"
            >
              ✕
            </button>
          </div>
        )}

        {children}

      </div>
    </div>
  );
}

export default Modal;