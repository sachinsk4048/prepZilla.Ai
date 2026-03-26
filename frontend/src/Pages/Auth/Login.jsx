//frontend\src\Pages\Auth\Login.jsx

import AppBackground from "../../components/layout/AppBackground";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import validateEmail from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../Context/userContext";
import loginImage from "../../assets/inter.webp";
import SpinnerLoader from "../../components/Loader/SpinnerLoader";


function Login({ setCurrentPage }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading) return; // extra safety

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Password is required.");
      return;
    }

    setError(null);
    setLoading(true); // 👈 START LOADING

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(response.data);
        navigate("/dashboard");
      }

    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false); // 👈 STOP LOADING
    }
  };

  return (
    <AppBackground>

      <div className="min-h-screen flex items-center justify-center px-6 pt-20">

        {/* BIG CARD */}
        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 p-10">
            <img
              src={loginImage}
              alt="login illustration"
              className="max-w-md drop-shadow-xl"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="flex items-center justify-center p-10">

            <div className="w-full max-w-sm">

              <h1 className="text-3xl font-bold text-blue-600 mb-2 text-center">
                prepZilla<span className="text-gray-800">.Ai</span>
              </h1>

              <p className="text-center text-gray-500 mb-8">
                Sign in to your account
              </p>

              <form onSubmit={handleLogin} className="space-y-5">

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

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                {/* LOGIN BUTTON */}
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
                      Logging in...
                    </>
                  ) : (
                    "Continue"
                  )}
                </button>

              </form>

              <p className="text-center text-sm text-gray-600 mt-6">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 font-semibold hover:underline"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>
              </p>

            </div>

          </div>

        </div>

      </div>

    </AppBackground>
  );
}

export default Login;