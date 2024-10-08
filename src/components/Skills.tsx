import React from 'react'
import { Code, Server, Database } from 'lucide-react'

const skills = [
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'MySQL', icon: Database },
]

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <skill.icon size={48} className="text-gray-700 mb-4" />
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills