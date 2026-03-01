import React from 'react'

const Experience = () => {
  const experiences = [
    {
      logo: 'T',
      company: 'Teachyst',
      role: 'Founder & CEO',
      handle: '@Teachyst',
      period: 'Sep 2024 - Present',
      location: 'India',
      flag: '🇮🇳',
      desc1: 'White Labelled Next.js LMS',
      desc2: 'Platform for educators and creators'
    },
    {
      logo: 'A',
      company: 'ABC Corp',
      role: 'SDE Intern',
      handle: '@ABC',
      period: 'Jun 2024 - Aug 2024',
      location: 'Remote',
      flag: '🌐',
      desc1: 'Full Stack Developer (MERN)',
      desc2: 'Built dashboard with real-time analytics'
    },
    {
      logo: 'X',
      company: 'XYZ Tech',
      role: 'Software Intern',
      handle: '@XYZ',
      period: 'Jan 2024 - Mar 2024',
      location: 'Ludhiana, Punjab',
      flag: '🇮🇳',
      desc1: 'DSA & Python Projects',
      desc2: 'Optimized algorithms for 3+ production projects'
    }
  ]

  return (
    <section id='experience' className='mt-16 w-full px-12 max-w-7xl mx-auto relative bg-black text-white'>
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out -translate-x-4 group-hover:translate-x-0 shadow-lg"></div>
      
      <div>
        <h1 className='font-bold text-4xl text-left'>Experience</h1>
        <hr className='border-t-2 border-gray-400 my-4'></hr>
      </div>

      <div className="max-w-2xl mx-auto space-y-8 mt-10">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start space-x-4 group">
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-xl shadow-blue-500/25">
              <span className="text-white font-bold text-sm tracking-wider">{exp.logo}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-semibold text-white hover:text-blue-400 transition-colors duration-300">
                  {exp.company}
                </h3>
                <span className="text-xs text-gray-400 font-medium">{exp.period}</span>
              </div>
              
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-base font-semibold text-white">{exp.role}</span>
                <span className="text-blue-400 font-semibold">{exp.handle}</span>
              </div>
              
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <div className="w-4 h-4 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-400 text-xs font-medium">{exp.flag}</span>
                  </div>
                  <span>{exp.location}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{exp.desc1}</p>
                <p className="text-sm text-gray-500 italic">{exp.desc2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
