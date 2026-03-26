// InterviewPrepAi\frontend\src\components\Cards\ProfileInfoCard.jsx

import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

function ProfileInfoCard() {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (
    user && (
      <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200">

        {/* Avatar with gradient ring */}
        <div className="p-[2px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-indigo-500">
          <div className="h-10 w-10 rounded-full overflow-hidden bg-white">
            <img
              src={user.profileImageUrl || undefined}
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold text-gray-900">
            {user.name || ""}
          </p>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition"
          >
            <LuLogOut size={14} />
            Logout
          </button>
        </div>
      </div>
    )
  );
}

export default ProfileInfoCard;