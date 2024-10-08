import React from 'react'

const Hero = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-yellow-200 to-green-200 rounded-3xl mb-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          Olá, eu sou o Alê
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
          Desenvolvo ideias e ajudo a construir um mundo melhor através do software.
        </p>
        <a
          href="#contact"
          className="bg-gray-800 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Contate-me
        </a>
      </div>
    </section>
  )
}

export default Hero