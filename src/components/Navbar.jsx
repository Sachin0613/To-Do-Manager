import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-indigo-900 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>xTask</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all hover:bg-black ' >Home</li>
        <li className='cursor-pointer hover:font-bold transition-all hover:bg-black '>Tasks</li>
      </ul>
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/sachin-yadav-631b6031a/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Sachin0613"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}


export default Navbar
