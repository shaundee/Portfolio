import React, { useRef } from 'react'
import Projects from './Projects'

const NavBar = () => {
  return (
    <div className="fixed top-2/4 z-50  flex h-screen -translate-y-2/4 items-center space-x-4  bg-zinc-900 transition-all ">
      <ul className="hidden space-y-16 p-4  md:flex md:flex-col">
        <li
          onClick={() =>
            document
              .getElementById('home')
              .scrollIntoView({ behavior: 'smooth' })
          }
          className="navLinks"
        >
          Home
        </li>

        <li
          onClick={() =>
            document
              .getElementById('projects')
              .scrollIntoView({ behavior: 'smooth' })
          }
          className="navLinks"
        >
          Projects
        </li>
        <li
          onClick={() =>
            document
              .getElementById('aboutMe')
              .scrollIntoView({ behavior: 'smooth' })
          }
          className="navLinks"
        >
          About Me
        </li>
        <li
          onClick={() =>
            document
              .getElementById('experience')
              .scrollIntoView({ behavior: 'smooth' })
          }
          className="navLinks"
        >
          work
        </li>

        <li className="navLinks">contact</li>
      </ul>
      {/* hamburger menu */}
    </div>
  )
}

export default NavBar
