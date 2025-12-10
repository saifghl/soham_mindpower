import React from "react";

const expertiseItems = [
  {
    title: "Life Coaching",
    description:
      "Partnership where a coach helps clients achieve personal and professional growth by clarifying goals, overcoming obstacles, and creating strategies for success.",
  },
  {
    title: "Hypnotherapy",
    description:
      "To treat a wide range of issues, including anxiety, phobias, and depression, as well as behavioral problems like smoking cessation and weight loss.",
  },
  {
    title: "Mind Training",
    description:
      "Any activity that strengthens mental skills like memory, focus, and problem-solving through structured, focused exercises.",
  },
  {
    title: "Acupressure",
    description:
      "Ancient Chinese therapy, similar to acupuncture but without needles, using gentle pressure on specific points on the body.",
  },
];

function OurExpertise() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
        

        <h2 className="text-[32px] md:text-[36px] font-semibold text-black mb-12 text-center">
          Our Expertise
        </h2>

    
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-[0_10px_25px_rgba(15,23,42,0.08)] px-6 py-8 flex flex-col text-center"
            >
              <h3 className="text-[18px] font-semibold text-black mb-4">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#4B5563]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

    
        <button className="border border-[#0057B8] text-[#0057B8] rounded-md px-6 py-2.5 text-[14px] font-medium hover:bg-[#0057B8] hover:text-white transition-colors">
          See More
        </button>
      </div>
    </section>
  );
}

export default OurExpertise;
