import { useState, useContext, useEffect } from "react";
import { FiMenu, FiX, FiLogIn, FiLogOut } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import "../../styles/logo.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, clearUser } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearUser();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (path, label) => (
    <button
      onClick={() => navigate(path)}
      className={`group relative font-semibold text-[15px] transition-colors duration-300
      ${location.pathname === path ? "text-blue-600" : "text-gray-700"}
      hover:text-blue-600`}
    >
      {label}

      <span
        className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] bg-blue-600 transition-all duration-500
        ${location.pathname === path ? "w-full" : "w-0 group-hover:w-full"}`}
      />
    </button>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 z-50
        ${scrolled
            ? "h-16 bg-white shadow-md"
            : "h-20 bg-white/70 backdrop-blur-md shadow-sm"
          }`}
      >

        <div className="w-full h-full flex items-center justify-between px-6">

          {/* LEFT : LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer select-none"
          >
            <h1
              className={`logo-gradient-animate font-extrabold tracking-tight transition-all duration-300
              ${scrolled ? "text-2xl" : "text-3xl"}`}
            >
              prepZilla<span className="font-black">.AI</span>
            </h1>
          </div>

          {/* CENTER MENU */}
          <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">

            {navItem("/", "Home")}
            {navItem("/dashboard", "Interview Preparation")}
            {navItem("/tips", "Tips & Tricks")}
            

          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">

            {!user ? (

              <button
                onClick={() => navigate("/login")}
                className="hidden md:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition"
              >
                <FiLogIn />
                Sign In
              </button>

            ) : (

              <div className="hidden md:flex items-center gap-4">

                <img
                  src={user.profileImageUrl || "/default-avatar.png"}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover border"
                />

                <span className="font-bold text-gray-800">
                  {user.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                  <FiLogOut />
                  Logout
                </button>

              </div>

            )}

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>

          </div>

        </div>

      </nav>


      {/* MOBILE MENU */}
      <div
  className={`fixed top-0 right-0 h-full w-[320px] bg-white/80 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 z-50 ${
    menuOpen ? "translate-x-0" : "translate-x-full"
  }`}
>

  {/* HEADER */}
  <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      prepZilla.Ai
    </h2>

    <FiX
      className="text-2xl cursor-pointer text-gray-600 hover:text-black transition"
      onClick={() => setMenuOpen(false)}
    />
  </div>


  {/* BODY */}
  <div className="flex flex-col h-[calc(100%-72px)] justify-between">

    {/* TOP CONTENT */}
    <div>

      {/* USER SECTION */}
      {user && (
        <div className="flex items-center gap-4 px-6 py-6 border-b border-gray-100">

          <img
            src={user.profileImageUrl || "/default-avatar.png"}
            className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
            alt="profile"
          />

          <div>
            <p className="font-semibold text-gray-900 text-lg">
              {user.name}
            </p>

            <p className="text-sm text-gray-500">
              Welcome back
            </p>
          </div>

        </div>
      )}


      {/* NAV OPTIONS */}
      <div className="flex flex-col gap-2 px-4 py-6">

         <button
          onClick={() => {
            navigate("/");
            setMenuOpen(false);
          }}
          className="text-left px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          Home
        </button>

        <button
          onClick={() => {
            navigate("/dashboard");
            setMenuOpen(false);
          }}
          className="text-left px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          Interview Preparation
        </button>

        <button
          onClick={() => {
            navigate("/tips");
            setMenuOpen(false);
          }}
          className="text-left px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
        >
          Tips & Tricks
        </button>

       

      </div>

    </div>


    {/* AUTH BUTTON */}
    <div className="px-6 pb-8">

      {!user ? (

        <button
          onClick={() => {
            navigate("/login");
            setMenuOpen(false);
          }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-semibold transition shadow-md"
        >
          <FiLogIn />
          Sign In
        </button>

      ) : (

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 py-3 rounded-xl font-semibold transition border border-red-200"
        >
          <FiLogOut />
          Logout
        </button>

      )}

    </div>

  </div>

</div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

    </>
  );
}

export default Navbar;