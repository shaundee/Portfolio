import React, { useEffect, useRef, useState } from 'react'
import { projectsState } from '../atoms/elementRefAtoms'
import BasicMenu from './BasicMenu'
import { useRecoilState } from 'recoil'

const NavBar = (props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
console.log(ref)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={`${isScrolled === true ? 'bg-indigo-700 ' : 'bg-slate-900/20'} 
        fixed top-0 z-50 flex w-screen items-start space-x-4 md:top-2/4 md:h-screen md:w-fit md:-translate-y-2/4  md:items-center md:transition-all md:duration-[.8s]`}
    >
      <BasicMenu ref={ref} />
      <ul className="hidden space-y-16 p-4 md:flex md:flex-col">
        <li
           onClick={() =>
            window.scrollTo({
              top: ref?.[4].current,

              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          Home
        </li>

        <li
          onClick={() =>
            window.scrollTo({
              top: ref?.[0].current.offsetTop,

              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          Projects
        </li>
        <li
          onClick={() =>
            window.scrollTo({
              top: ref?.[1].current.offsetTop,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          About Me
        </li>
        <li
          onClick={() =>
            window.scrollTo({
              top: ref?.[2].current.offsetTop,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          work
        </li>

        <li
          onClick={() =>
            window.scrollTo({
              top: ref?.[3].current.offsetTop,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          contact
        </li>
      </ul>
      {/* hamburger menu */}
    </div>
  )
}

export default React.forwardRef(NavBar)
