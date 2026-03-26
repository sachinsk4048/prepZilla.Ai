import "../../styles/animations.css";

function AppBackground({ children }) {
  return (
    <div className="hero-bg relative min-h-screen overflow-hidden text-gray-900">

      {/* grid overlay */}
      <div className="grid-bg pointer-events-none"></div>

      {/* animated background blobs */}
      <div className="blob blob1 pointer-events-none"></div>
      <div className="blob blob2 pointer-events-none"></div>
      <div className="blob blob3 pointer-events-none"></div>

      {/* page content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>

    </div>
  );
}

export default AppBackground;