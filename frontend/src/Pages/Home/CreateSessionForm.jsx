// InterviewPrepAi\frontend\src\Pages\Home\CreateSessionForm.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import SpinnerLoader from "../../components/Loader/SpinnerLoader";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";

function CreateSessionForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    topicsToFocus: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleCreateSession = async (e) => {
    e.preventDefault();

    const { role, experience, topicsToFocus } = formData;

    if (!role || !experience || !topicsToFocus) {
      setError("Please fill all the required fields.");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // Step 1: Generate AI Questions
      const aiResponse = await axiosInstance.post(
        API_PATHS.AI.GENERATE_QUESTIONS,
        {
          role,
          experience,
          topicsToFocus,
          numberOfQuestions: 10,
        }
      );

      const generatedQuestions =
        aiResponse.data?.questions || aiResponse.data;

      // Step 2: Create Interview Session
      const response = await axiosInstance.post(
        API_PATHS.SESSION.CREATE,
        {
          ...formData,
          questions: generatedQuestions,
        }
      );

      // Step 3: Navigate to interview page
      if (response.data?.session?._id) {
        navigate(`/interview-prep/${response.data.session._id}`);
      }
    } catch (err) {
      if (err?.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

return (
  <div className="w-full">

    <h3 className="text-2xl font-bold text-white">
      Start a New Interview Journey
    </h3>

    <p className="text-white/80 text-sm mt-1 mb-6">
      Fill details and generate AI interview questions
    </p>

    <form onSubmit={handleCreateSession} className="flex flex-col gap-5">

      <Input
        value={formData.role}
        onChange={(e) => handleChange("role", e.target.value)}
        label="Target Role *"
        placeholder="Frontend Developer, Backend Developer..."
        type="text"
      />

      <Input
        value={formData.experience}
        onChange={(e) => handleChange("experience", e.target.value)}
        label="Years of Experience *"
        placeholder="1, 3, 5+"
        type="number"
      />

      <Input
        value={formData.topicsToFocus}
        onChange={(e) => handleChange("topicsToFocus", e.target.value)}
        label="Topics to Focus On *"
        placeholder="React, Node.js, MongoDB"
        type="text"
      />

      <Input
        value={formData.description}
        onChange={(e) => handleChange("description", e.target.value)}
        label="Description"
        placeholder="Any specific goals for this session..."
        type="text"
      />

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="
        w-full mt-2 flex items-center justify-center gap-2
        bg-gradient-to-r from-blue-600 to-purple-600
        hover:from-blue-700 hover:to-purple-700
        text-white font-semibold
        py-3 rounded-xl
        shadow-lg hover:shadow-xl
        transition-all duration-200
        disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading && <SpinnerLoader />}
        {isLoading ? "Creating..." : "Create Session"}
      </button>

    </form>

  </div>
);
}

export default CreateSessionForm;