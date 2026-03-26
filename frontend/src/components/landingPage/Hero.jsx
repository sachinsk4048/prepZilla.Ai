// InterviewPrepAi\frontend\src\components\landingPage\Hero.jsx

import { useNavigate } from "react-router-dom";
import { FiCheckCircle, FiUsers } from "react-icons/fi";
import { HiRocketLaunch } from "react-icons/hi2";
import { useEffect, useState } from "react";
import "../../styles/animations.css";
import google from "../../assets/icons/google.svg";
import netflix from "../../assets/icons/netflix.svg";
import meta from "../../assets/icons/meta.svg";
import amazon from "../../assets/icons/amazon.svg";
import apple from "../../assets/icons/apple.svg";
import microsoft from "../../assets/icons/microsoft.svg";
import uber from "../../assets/icons/uber.png";
import flipkart from "../../assets/icons/flipkart.svg";
function Hero() {

  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  // fake user counter animation
  useEffect(() => {
    let start = 0;
    const end = 500;
    const duration = 1000;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  // CTA click logic
  const handleStart = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
<section className="hero-section relative text-center px-6 md:px-20 py-20 md:py-32">
  
  <div className="relative z-10">

    <div className="trusted-badge">
      <FiUsers className="badge-icon" />
      <span>
        Trusted by <b>{count.toLocaleString()}+</b> job seekers
      </span>
    </div>

    <h1 className="hero-title">
      Ace Every Interview.
      <br />
      <span className="gradient-text">
        Land Your Dream Job Faster
      </span>
    </h1>

    <div className="features font-black">
      {[
        "Create Sessions",
        "Tailored Questions",
        "Realistic Practice Interview",
        "And much more..."
      ].map((item, index) => (
        <div key={index} className="feature-item">
          <FiCheckCircle className="feature-icon" />
          {item}
        </div>
      ))}
    </div>

    <button onClick={handleStart} className="cta-button">
      <HiRocketLaunch className="rocket-icon" />
      Start For Free
    </button>

  </div>

  {/* Floating Icons */}
<div className="floating-icons">

  {/* LEFT SIDE */}
  <div className="icon i1"><img src={google} /></div>
  <div className="icon i2"><img src={apple} /></div>
  <div className="icon i3"><img src={meta} /></div>
  <div className="icon i4"><img src={flipkart} /></div>

  {/* RIGHT SIDE */}
  <div className="icon i5"><img src={netflix} /></div>
  <div className="icon i6"><img src={amazon} /></div>
  <div className="icon i7"><img src={uber} /></div>
  <div className="icon i8"><img src={microsoft} /></div>

</div>

</section>
  );
}

export default Hero;