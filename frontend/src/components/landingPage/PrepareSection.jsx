import { useNavigate } from "react-router-dom";
import { FiTrendingUp } from "react-icons/fi";
import { useEffect, useRef } from "react";
import prepImage from "../../assets/pp.png";

function PrepareSection() {

  const navigate = useNavigate();

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // scroll animation
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }

        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();

  }, []);

  const handleClick = () => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }

  };

  return (

<section className="py-28">

<div className="max-w-7xl mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center">

{/* LEFT IMAGE */}
<div ref={leftRef} className="animate-left flex justify-center">

<img
src={prepImage}
alt="Interview preparation UI"
className="w-full max-w-xl md:max-w-2xl drop-shadow-2xl"

/>

</div>


{/* RIGHT CONTENT */}
<div ref={rightRef} className="animate-right">

<h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">

FREE: Prepare your interview
<br />

<span className="text-blue-600">
tailored preparation.
</span>

</h2>

<p className="mt-6 text-gray-600 text-lg leading-relaxed">

Get role-specific questions, expand answers when you need them, dive deeper into concepts, and organize everything your way.
From preparation to mastery — your ultimate interview toolkit is here.

</p>

<button
onClick={handleClick}
className="mt-8 flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md transition hover:scale-105"
>

<FiTrendingUp />

Prepare Interview For Free

</button>

</div>

</div>

</section>

  );
}

export default PrepareSection;