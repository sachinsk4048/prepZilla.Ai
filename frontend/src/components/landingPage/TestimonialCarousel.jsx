import { useEffect, useRef, useState } from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    text: "Since I've been practicing with prepZilla.Ai, I've felt much more confident in interviews. Where I used to stumble over my words, everything flows much more smoothly now.",
    name: "Alfonso D."
  },
  {
    text: "The most valuable part is that you can really practice the interview and evaluate your answers. It gives you a clear view of how you come across and what you can improve.",
    name: "Karan B."
  },
  {
    text: "What I liked about prepZilla.Ai is that it didn't feel generic. Everything was tailored to the job and to me, which made the preparation feel personal and relevant.",
    name: "Michael B."
  },
  {
    text: "The research I'd normally have to do myself was already done for me. That saved me so much time. I also really liked practicing with the tailored interview questions..",
    name: "Danny N."
  },
  {
    text: "prepZilla.Ai really helped me to understand who my interviewers were, their perspective, what questions to expect, and how to perfect my answers.",
    name: "Sophia L."
  },
  {
    text: "Using prepZilla.Ai to prepare for job interviews helped me feel confident and well-prepared. I was ready for any question!",
    name: "Daniel R."
  }
];

const data = [...testimonials, ...testimonials];

function Card({ text, name }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 h-[260px] flex flex-col justify-between">

      <div className="flex justify-center text-yellow-400 mb-4">
        {Array(5).fill().map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="text-gray-700  font-semibold text-center leading-relaxed">
        “{text}”
      </p>

      <div className="flex justify-center items-center gap-2 text-gray-800 mt-6 font-medium">
        <FaUserCircle className="text-blue-600 text-xl" />
        {name}
      </div>

    </div>
  );
}

export default function TestimonialCarousel() {

  const viewportRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  const GAP = 32;

  useEffect(() => {

   const updateWidth = () => {

  if (!viewportRef.current) return;

  const viewportWidth = viewportRef.current.offsetWidth;

  let cardsPerView = 3;

  if (viewportWidth < 768) {
    cardsPerView = 1;
  } else if (viewportWidth < 1024) {
    cardsPerView = 2;
  }

  const width = (viewportWidth - GAP * (cardsPerView - 1)) / cardsPerView;

  setCardWidth(width);
};

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);

  }, []);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 5500);

    return () => clearInterval(interval);

  }, []);

  useEffect(() => {

    if (index === testimonials.length) {

      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 1200);

      setTimeout(() => {
        setAnimate(true);
      }, 1250);

    }

  }, [index]);


  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto text-center mb-16">

        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Success Stories from Candidates Like You
        </h2>

        <p className="text-gray-500 text-lg">
          Trusted and loved by candidates in every industry and role.
        </p>

      </div>


      <div className="max-w-7xl mx-auto px-6">

        <div ref={viewportRef} className="overflow-hidden">

          <div
            className={`flex gap-8 ${animate ? "transition-transform duration-[1400ms] ease-[cubic-bezier(.25,.8,.25,1)]" : ""}`}
            style={{
              transform: `translateX(-${index * (cardWidth + GAP)}px)`
            }}
          >

            {data.map((t, i) => (
              <div
                key={i}
                style={{ width: cardWidth }}
                className="flex-shrink-0"
              >
                <Card {...t} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}