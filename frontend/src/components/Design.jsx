import { UserRoundPen } from 'lucide-react'
import React from 'react'

const Design = () => {
  return (
     <section
  id="design"
  className="bg-primary text-white min-h-screen w-full py-16 px-4 md:px-8"
>
  {/* Heading */}
  <div className="text-center max-w-3xl mx-auto">
    <h2 className="font-head text-tertiary text-3xl md:text-5xl font-semibold">
      👗 What We Design
    </h2>

    <p className="mt-4 text-lg text-gray-200">
      Every stitch tells a story. Our handcrafted Aari designs blend
      tradition, elegance, and creativity to make every outfit unique.
    </p>
  </div>

  {/* Design Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

    <div className="bg-neutral p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">👚</div>

      <div className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-3">
        ⭐ Most Popular
      </div>

      <h3 className="text-primary font-head text-xl">
        Blouses
      </h3>

      <p className="text-[#554243] mt-2">
        Ornate back necks and heavy sleeve embroidery.
      </p>
    </div>

    <div className="bg-neutral p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">🥻</div>

      <div className="inline-block bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mb-3">
        👑 Bridal Favorite
      </div>

      <h3 className="text-primary font-head text-xl">
        Lehengas
      </h3>

      <p className="text-[#554243] mt-2">
        Grand panels with traditional Zardosi and Aari work.
      </p>
    </div>

    <div className="bg-neutral p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">👕</div>

      <h3 className="text-primary font-head text-xl">
        Chudithars
      </h3>

      <p className="text-[#554243] mt-2">
        Elegant neckline and border highlights for suits.
      </p>
    </div>

    <div className="bg-neutral p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">👗</div>

      <h3 className="text-primary font-head text-xl">
        Long Tops
      </h3>

      <p className="text-[#554243] mt-2">
        Contemporary tunics with minimalist embroidery.
      </p>
    </div>

    <div className="bg-neutral p-6 rounded-xl shadow-lg hover:-translate-y-2 transition duration-300">
      <div className="text-5xl mb-4">✨</div>

      <h3 className="text-primary font-head text-xl">
        Custom Design
      </h3>

      <p className="text-[#554243] mt-2">
        Bring your vision and we'll bring it to life.
      </p>
    </div>

  </div>

  {/* Statistics */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">

    <div>
      <h3 className="text-3xl md:text-4xl font-bold text-tertiary">
        500+
      </h3>
      <p className="mt-2">Happy Customers</p>
    </div>

    <div>
      <h3 className="text-3xl md:text-4xl font-bold text-tertiary">
        1000+
      </h3>
      <p className="mt-2">Designs Completed</p>
    </div>

    <div>
      <h3 className="text-3xl md:text-4xl font-bold text-tertiary">
        5+
      </h3>
      <p className="mt-2">Years Experience</p>
    </div>

    <div>
      <h3 className="text-3xl md:text-4xl font-bold text-tertiary">
        100%
      </h3>
      <p className="mt-2">Handcrafted</p>
    </div>

  </div>

  {/* CTA */}
  <div className="text-center mt-16 max-w-2xl mx-auto">

    <h3 className="font-head text-3xl text-tertiary">
      Need Something Unique?
    </h3>

    <p className="mt-4 text-gray-200">
      Have a custom design in mind? Share your inspiration and let our
      artisans craft a masterpiece just for you.
    </p>

    <button className="mt-8 bg-tertiary text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
      <a href="#form">Request Custom Design</a>
    </button>

  </div>
</section>
  )
}

export default Design