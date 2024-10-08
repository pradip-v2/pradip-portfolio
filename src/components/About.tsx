import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-white rounded-3xl mb-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Adriano Berg"
            className="rounded-full w-64 h-64 object-cover mx-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mim</h2>
          <p className="text-gray-700 mb-4">
            Olá! Sou um desenvolvedor full-stack apaixonado por criar soluções inovadoras. Com mais de 5 anos de experiência, tenho trabalhado em projetos desafiadores que me permitiram aprimorar minhas habilidades em diversas tecnologias.
          </p>
          <p className="text-gray-700 mb-4">
            Meu objetivo é desenvolver aplicações robustas e escaláveis que não apenas atendam às necessidades dos usuários, mas também superem suas expectativas. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como profissional.
          </p>
          <p className="text-gray-700">
            Quando não estou codando, gosto de explorar novas tecnologias, contribuir para projetos open-source e compartilhar conhecimento com a comunidade de desenvolvedores.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About