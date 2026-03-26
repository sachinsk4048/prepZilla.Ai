// InterviewPrepAi\frontend\src\components\DeleteAlertContent.jsx 

import React from "react";

function DeleteAlertContent({ content, onDelete, onClose }) {
  return (
    <div>

      <p className="text-sm text-white/90">
        {content}
      </p>

      <div className="flex justify-end gap-3 mt-6">

        <button
          onClick={onClose}
          className="px-4 py-2 rounded-md text-sm bg-white/20 text-white border border-white/30 hover:bg-white/30"
        >
          Cancel
        </button>

        <button
          onClick={onDelete}
          className="px-4 py-2 rounded-md text-sm bg-red-500 text-white hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default DeleteAlertContent;