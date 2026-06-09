import React, { useState } from "react";
import bridal1 from '../assets/bridal1.jpg'
import bridal2 from '../assets/bridal2.jpg'
import bridal3 from '../assets/bridal3.jpg'
import bridal4 from '../assets/bridal4.jpg'
import simple1 from '../assets/simple1.jpg'
import simple2 from '../assets/simple2.jpeg'
import simple3 from '../assets/simple3.jpg'
import simple4 from '../assets/simple4.jpg'
import trending1 from '../assets/trending1.jpg'
import trending2 from '../assets/trending2.jpg'
import trending3 from '../assets/trending3.jpg'
import trending4 from '../assets/trending4.jpg'

const OurWork = () => {
  const works = {
  bridal: [
    bridal1,
    bridal2,
    bridal3,
    bridal4
  ],

  simple: [
    simple1,
    simple2,
    simple3,
    simple4
  ],

  trending: [
    trending1,
    trending2,
    trending3,
    trending4
  ],
};

  const [category, setCategory] = useState("bridal");

  return (
    <section
      id="work"
      className="min-h-screen w-full py-12 px-4 md:px-8 bg-[#FCF9F2]"
    >
      {/* Heading + Navigation */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-10">
        
        <div>
          <h2 className="font-head text-primary text-3xl md:text-4xl lg:text-5xl font-semibold">
            🖼️ Our Work
          </h2>

          <p className="text-[#554243] mt-3">
            A visual journey through our finest creations.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap gap-3 ">
          
          <button
            onClick={() => setCategory("bridal")}
            className={`px-5 py-2 rounded-full transition-all duration-300
              ${
                category === "bridal"
                  ? "bg-primary text-white"
                  : "bg-white border border-primary text-primary"
              }`}
          >
            Bridal
          </button>

          <button
            onClick={() => setCategory("simple")}
            className={`px-5 py-2 rounded-full transition-all duration-300
              ${
                category === "simple"
                  ? "bg-primary text-white"
                  : "bg-white border border-primary text-primary"
              }`}
          >
            Simple
          </button>

          <button
            onClick={() => setCategory("trending")}
            className={`px-5 py-2 rounded-full transition-all duration-300
              ${
                category === "trending"
                  ? "bg-primary text-white"
                  : "bg-white border border-primary text-primary"
              }`}
          >
            Trending
          </button>

        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        
        {works[category].map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image}
              alt={`design-${index}`}
              className="w-full h-80 object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default OurWork;