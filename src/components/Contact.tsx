import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Tem alguma ideia?</h2>
        <p className="text-xl text-center mb-8">Vamos construir juntos!</p>
        <div className="flex justify-center">
          <a
            href="mailto:hello@adrianoberg.io"
            className="bg-white text-gray-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300"
          >
            hello@adrianoberg.io
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact