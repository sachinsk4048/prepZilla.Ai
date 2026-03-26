// frontend/src/Pages/Auth/SignUp.jsx


import AppBackground from "../../components/layout/AppBackground";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import SpinnerLoader from "../../components/Loader/SpinnerLoader";

import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import validateEmail from "../../utils/helper";
import { UserContext } from "../../Context/userContext";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import uploadImage from "../../utils/uploadImage";

import signupImage from "../../assets/inter.webp"; // you can change later

function SignUp({ setCurrentPage }) {
  const [profilePic, setProfilePic] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
  e.preventDefault();

  if (loading) return; // prevent multiple clicks

  let profileImageUrl = "";

  if (!fullName) {
    setError("Please enter full name.");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!password) {
    setError("Password is required.");
    return;
  }

  setError("");
  setLoading(true); // 👈 START

  try {
    if (profilePic) {
      const imgUploadRes = await uploadImage(profilePic);
      profileImageUrl = imgUploadRes.imageUrl || "";
    }

    const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
      name: fullName,
      email,
      password,
      profileImageUrl,
    });

    const { token } = response.data;

    if (token) {
      localStorage.setItem("token", token);
      updateUser(response.data);
      navigate("/dashboard");
    }

  } catch (err) {
    if (err.response?.data?.error) {
      setError(err.response.data.error);
    } else {
      setError("Signup failed. Please try again.");
    }
  } finally {
    setLoading(false); // 👈 STOP
  }
};

  return (
    <AppBackground>
    <div className="min-h-screen flex items-center justify-center  px-6 pt-20">

      {/* BIG CARD */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-10">
          <img
            src={signupImage}
            alt="signup illustration"
            className="max-w-md drop-shadow-xl"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center p-10">

          <div className="w-full max-w-sm">

            <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">
              prepZilla<span className="text-gray-800">.Ai</span>
            </h1>

            <p className="text-center text-gray-500 mb-6">
              Create your account
            </p>

            <form onSubmit={handleSignUp} className="space-y-4">

              {/* PROFILE PHOTO */}
              <div className="flex justify-center">
                <ProfilePhotoSelector
                  image={profilePic}
                  setImage={setProfilePic}
                  preview={profilePreview}
                  setPreview={setProfilePreview}
                />
              </div>

              {/* FULL NAME */}
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              {/* PASSWORD */}
              <div className="relative">

                <input
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-gray-200 rounded-lg py-3 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {show ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              {/* SIGNUP BUTTON */}
              <button
  type="submit"
  disabled={loading}
  className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition 
    ${loading 
      ? "bg-blue-400 cursor-not-allowed" 
      : "bg-blue-600 hover:bg-blue-700 text-white"
    }`}
>
  {loading ? (
    <>
      <SpinnerLoader />
      Creating...
    </>
  ) : (
    "Create Account"
  )}
</button>

            </form>

            {/* LOGIN */}
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{" "}
              <button
              type="button"
                className="text-blue-600 font-semibold hover:underline"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </p>

          </div>

        </div>

      </div>

    </div>
    </AppBackground>
  );
}

export default SignUp;