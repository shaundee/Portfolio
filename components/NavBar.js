import React, { useCallback, useEffect, useRef, useState } from 'react'

import BasicMenu from './BasicMenu'
import { useRecoilState } from 'recoil'
import { directionState } from '../atoms/elementRefAtoms'
import { motion } from 'framer-motion'
import logo from '../public/logo.jpg'
import Image from 'next/image'
const linkVariants = {
  init: {
    opacity: 0,
    y: '-10vh',
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 7,
      stiffness: 100,
      staggerChildren: 0.1,
      delay: -0,
    },
  },
}
const ringVariant = {
  init: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    rotate: 360,
    transition: {
      ease: 'linear',
      duration: 1,
    },
  },
}

const logoVariant = {
  init: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}
const NavBar = (props, ref) => {
  let prevScrollY = 0

  const [direction, setDirection] = useRecoilState(directionState)

  const controlDirection = () => {
    if (window.pageYOffset === 0) {
      setDirection('isTopOfPage')
      console.log('TOP')
    } else if (window.scrollY > prevScrollY) {
      setDirection('down')
    } else {
      setDirection('up')
      console.log('up')
    }

    prevScrollY = window.scrollY
  }
  useEffect(() => {
    window.addEventListener('scroll', controlDirection)
    return () => {
      window.removeEventListener('scroll', controlDirection)
    }
  }, [])

  return (
    <div
      className={`${
        direction === 'down'
          ? '-translate-y-24 shadow-sm duration-300 ease-in-out'
          : direction === 'up'
          ? ' shadow-md backdrop-blur duration-200 ease-in-out'
          : direction === 'isTopOfPage'
          ? '  backdrop-blur-none duration-300 ease-in-out '
          : ''
      }
      
       fixed top-0  z-50 flex h-20 min-w-full items-center justify-between space-x-4 border-emerald-300/40 bg-slate-900/90  px-8 shadow-sm  shadow-emerald-300/40  md:px-16 `}
    >
      <a href="/">
        <motion.div
          variants={linkVariants}
          initial="init"
          animate={'visible'}
          className="relative flex  items-center justify-center pl-4 md:ml-20  "
        >
          <motion.div
            className="absolute h-[55px] w-[55px] rounded-full border-b-[3px] border-l-[3px] border-emerald-300 hover:border-fuchsia-900 "
            variants={ringVariant}
            initial="init"
            animate="visible"
          >
            <motion.div
              variants={logoVariant}
              initial="init"
              animate="visible"
              className="rounded-full border-4 border-transparent"
            >
              <div className="relative flex  rounded-full  duration-200 ease-in   ">
                <div className=" absolute z-10 flex rounded-full bg-slate-900/20 duration-200 ease-in "></div>
                <Image
                  src={logo}
                  objectFit="contain"
                  className="mx-auto rounded-full "
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </a>

      <BasicMenu ref={ref} />
      <motion.ul
        variants={linkVariants}
        initial="init"
        animate={'visible'}
        className="  hidden space-x-16 p-4 md:flex md:transition-all md:duration-[.8s]"
      >
        <motion.li
          variants={linkVariants}
          onClick={() =>
            window.scrollTo({
              top: ref?.[4].current,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          Home
        </motion.li>

        <motion.li
          variants={linkVariants}
          onClick={() =>
            window.scrollTo({
              top: ref?.[0].current.offsetTop,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          Projects
        </motion.li>
        <motion.li
          variants={linkVariants}
          onClick={() =>
            window.scrollTo({
              top: ref?.[1].current.offsetTop,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          About Me
        </motion.li>
        <motion.li
          variants={linkVariants}
          onClick={() =>
            window.scrollTo({
              top: ref?.[2].current.offsetTop,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          work
        </motion.li>

        <motion.li
          variants={linkVariants}
          onClick={() =>
            window.scrollTo({
              top: ref?.[3].current.offsetTop,
              behavior: 'smooth',
            })
          }
          className="navLinks"
        >
          contact
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default React.forwardRef(NavBar)
