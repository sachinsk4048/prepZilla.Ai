// src/components/landingPage/StatsCounter.jsx

import { useEffect, useRef, useState } from "react";

const StatItem = ({ target, text, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-600">{count}%</h2>
      <p className="text-gray-600 mt-4">{text}</p>
    </div>
  );
};

function StatsCounter() {
  const sectionRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 pt-10">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          The Best Way to Prepare Yourself
        </h2>

        <p className="text-gray-500 mb-12">
          Fast, confident, and with a greater chance of success.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <StatItem
            start={start}
            target={93}
            text="Prepares faster for the job interview by preparing with prepZilla.Ai."
          />

          <StatItem
            start={start}
            target={100}
            text="Of the applicants is confident after preparing with prepZilla.Ai."
          />

          <StatItem
            start={start}
            target={87}
            text="Of our customers get accepted for the job after they have used prepZilla.Ai."
          />
        </div>

      </div>
    </section>
  );
}

export default StatsCounter;