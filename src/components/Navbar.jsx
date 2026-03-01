import React from 'react'
import image from '../assets/image.jpg'

const Navbar = () => {
    return (
        <div>
            <nav className='flex flex-row space-x-14 items-center p-4 bg-[#2D2D2D] rounded-lg w-fit'>
                <div className='flex items-center space-x-2'>
                    <img src={image} className='h-10 w-auto rounded-full' alt='logo'></img>
                    <h1 className='text-xs font-sans text-blue-500'>Rahul kumar</h1>
                </div><ul className='flex space-x-4 font-light text-sm'>

                    <li>
                        <a href="#home"
                            className='block px-3 py-2 rounded-md transition-all duration-300 hover:text-blue-400 hover:bg-[#3A3A3A] hover:scale-110'>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about"
                            className='block px-3 py-2 rounded-md transition-all duration-300 hover:text-blue-400 hover:bg-[#3A3A3A] hover:scale-110'>
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#projects"
                            className='block px-3 py-2 rounded-md transition-all duration-300 hover:text-blue-400 hover:bg-[#3A3A3A] hover:scale-110'>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="#skills"
                            className='block px-3 py-2 rounded-md transition-all duration-300 hover:text-blue-400 hover:bg-[#3A3A3A] hover:scale-110'>
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#experience"
                            className='block px-3 py-2 rounded-md transition-all duration-300 hover:text-blue-400 hover:bg-[#3A3A3A] hover:scale-110'>
                            Experience
                        </a>
                    </li>

                    <li>
                        <a href="#contact"
                            className='block px-3 py-2 rounded-md transition-all duration-300 hover:text-blue-400 hover:bg-[#3A3A3A] hover:scale-110'>
                            Contact
                        </a>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar