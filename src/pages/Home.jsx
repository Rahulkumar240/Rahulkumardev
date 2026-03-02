import React from 'react'
import image from '../assets/image.jpg'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaKaggle } from "react-icons/fa";
import About from './About';
import resume from '../assets/RahulKumar_Resume.pdf'
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#0a0f1a] to-[#05080f] text-white">
    <section id='home' className='flex items-center gap-10 mt-16 px-12 max-w-7xl mx-auto'>

      <div className='flex-[2]'>
        <h1 className='text-4xl font-bold'>
          Hello, I'm <span className='text-[#00FFFF]'>Rahul Kumar</span>
        </h1>
        <p className='text-lg mt-4 leading-relaxed'>
          Results-driven Software Developer specializing in Artificial Intelligence and Machine Learning, with strong foundations in Data Structures, Algorithms, and scalable system design. Passionate about building high-performance, production-ready solutions and solving complex real-world problems.
        </p>
        <br></br>
        <p className='text-lg mt-4'>Passionate about building intelligent, scalable systems powered by AI and efficient software engineering 🚀✨</p>
        
        <button className='bg-[#00FFFF] text-black font-bold px-6 py-3 rounded-2xl mt-4'><a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a></button>
      </div>




      <div className='flex-[1] flex flex-col items-center'>
        <img
          src={image}
          alt='Rahul Kumar'
          className='w-64 h-64 rounded-3xl border-2 border-black object-cover'
        />

        <div className='flex space-x-8 mt-4 text-2xl'>
          <a href="https://www.linkedin.com/in/rahulkumar297/" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className='hover:text-blue-500 cursor-pointer' />
          </a>

          <a href="https://github.com/Rahulkumar240" target="_blank" rel="noopener noreferrer">
            <FaGithub className='hover:text-gray-400 cursor-pointer' />
          </a>

          <a href="https://leetcode.com/u/Rahulkumar9709/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className='hover:text-orange-500 cursor-pointer' />
          </a>

          <a href="https://www.kaggle.com/rahulkumar397" target="_blank" rel="noopener noreferrer">
            <FaKaggle className='hover:text-[#00FFFF] cursor-pointer' />
          </a>
        </div>
      </div>
    </section>

    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
    </div>
  )
}

export default Home