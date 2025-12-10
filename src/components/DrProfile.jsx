import React from "react";
import dr_image from "../images/dr_image.jpg";

function DrProfile() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        
        <div>
          <h2 className="text-[42px] font-bold leading-tight text-black mb-6">
            डॉ. सचिन श्रीधर पोतदार
          </h2>

          <p className="text-[18px] leading-relaxed text-black mb-4">
            डॉ. पोंतदार हे निसर्गोपचारातिन 2004 पासून विशेषज्ञ आहेत.
            त्यांनी दीर्घकाळ मन, भावना आणि ऊर्जा यांच्या अभ्यासात अनुभव घेतला आहे.
          </p>

          <p className="text-[18px] leading-relaxed text-black mb-8">
            Mind Transformation Specialist आहेत. अधिक जाणून घ्या Dr. Sachin Potdar बद्दल.
          </p>

          <button
            className="border border-[#0057B8] text-[#0057B8] font-medium px-6 py-3 rounded-md hover:bg-[#0057B8] hover:text-white transition-all"
          >
            See More
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src={dr_image}
            alt="Dr Sachin Potdar"
            className="rounded-lg shadow-xl max-w-[400px]"
          />
        </div>

      </div>
    </section>
  );
}

export default DrProfile;
