import React from 'react'

const Skills = () => {

  const skills = [
    {
      name: 'python',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    },
    {
      name: 'DSA',
      icon: 'https://media.licdn.com/dms/image/v2/D5612AQG1pE_H-m9TgQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677414547742?e=2147483647&v=beta&t=iHWyjlmjOE9aNKAIVKvwFipkJSALPrJwuebad8u5InE',
    },
    {
      name: 'C++',
      icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
    },
    {
      name: 'C',
      icon: 'https://www.clipartmax.com/png/middle/240-2409409_c-programming-icon-c-programming-language-icon.png',
    },
    {
      name: 'Java',
      icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    },
    {
      name: 'React',
      icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://images.seeklogo.com/logo-png/43/1/tailwind-css-logo-png_seeklogo-434090.png',
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png',
    },
    {
      name: 'Material UI',
      icon: 'https://mui.com/static/logo.png',
    },
    {
      name: 'Git',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png',
    },
    {
      name: 'GitHub',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    },
    {
      name: 'SQL',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png',
    },
    {
      name: 'HTML',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png',
    },
    {
      name: 'CSS',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png',
    }
  ]

  return (
    <section id='skills' className='mt-16 w-full px-12 max-w-7xl mx-auto'>
      <div>
        <h1 className='font-bold text-4xl text-left'>Skills</h1>
        <hr className='border-t-2 border-gray-300 my-4'></hr>
        <div className="skill-card flex flex-wrap gap-8 mt-8 items-center justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-4 w-32 justify-center text-black hover:scale-110 hover:transition-transform duration-300">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain" />
              <p className="text-lg mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills