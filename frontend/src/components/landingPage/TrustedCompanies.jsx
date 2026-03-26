import amazon from "../../assets/logos/Amazon.svg";
import belasting from "../../assets/logos/Belastingdienst.svg";
import booking from "../../assets/logos/Booking.svg";
import coolblue from "../../assets/logos/Coolblue.svg";
import dhl from "../../assets/logos/DHL.svg";
import ing from "../../assets/logos/ING.svg";
import klm from "../../assets/logos/KLM.svg";
import shell from "../../assets/logos/Shell.svg";

import "../../styles/logoSlider.css";

function TrustedCompanies() {

  const logos = [
    amazon,
    belasting,
    booking,
    coolblue,
    dhl,
    ing,
    klm,
    shell
  ];

  return (

<section className="w-full py-28 pt-0 pb-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">

  <div className="w-full">

    <div className="relative w-full rounded-xl border border-white/30 bg-white/40 backdrop-blur-lg shadow-lg py-16 md:py-20 px-4 md:px-10 overflow-hidden">

      {/* glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

      <h2 className="relative text-center text-2xl md:text-3xl font-semibold text-black mb-14">
        Trusted by Job Seekers Who’ve Applied At
      </h2>

      <div className="relative logo-slider">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company"
              className="h-12 md:h-14 mx-14 opacity-90 contrast-125 brightness-110"
            />
          ))}
        </div>
      </div>

    </div>

  </div>

</section>

  );
}

export default TrustedCompanies;