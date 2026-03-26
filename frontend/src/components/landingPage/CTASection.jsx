// src/components/landingPage/CTASection.jsx

import { HiRocketLaunch } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "../../styles/animations.css";

export default function CTASection() {

  const navigate = useNavigate();

  const handleStart = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="relative py-32  text-center px-6  pt-20 pb-0">

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
          Ready to{" "}
          <span className="gradient-text">
            Land Your Next Job?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
          Discover how prepZilla.Ai can help you prepare smarter,
          practice interviews, and land your dream job faster.
        </p>

        {/* CTA Button */}
        <button
          type="button"
          onClick={handleStart}
          className="cta-button mx-auto flex items-center gap-3"
        >
          <HiRocketLaunch className="rocket-icon" />
          Start For Free
        </button>

      </div>

    </section>
  );
}