import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Slider from './Slider'

const aboutVariants = {
  init: {
    opacity: 0,
    y: '10vh',
  },
  visible: {
    opacity: 1,
    y: '0vh',

    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 7,
      stiffness: 70,
      staggerChildren: 0.1,
    },
  },
}
const AboutMe = (props, ref) => {
  const controls = useAnimation()
  const [elRef, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <div
      ref={ref}
      id="aboutMe"
      className="  flex flex-col items-center justify-center bg-slate-900 bg-[url('https://wallpapercave.com/wp/wp2553589.jpg')]  bg-auto 
      bg-bottom px-10 bg-blend-darken md:h-screen md:px-20 md:text-lg lg:text-xl "
    >
      <motion.div
        ref={elRef}
        variants={aboutVariants}
        initial="init"
        animate={controls}
        className=" mx-auto grid grid-cols-1 px-2 text-left md:grid-cols-2 xl:max-w-7xl xl:pr-[4rem]"
      >
        <motion.h2
          ref={elRef}
          variants={aboutVariants}
          initial="init"
          animate={controls}
          className=" col-span-2 mb-10 flex flex-col text-center font-mono text-2xl text-white md:text-right md:text-4xl "
        >
          A bit About Me
          <hr className="w-2/4 self-center border-fuchsia-900 md:self-end"></hr>
        </motion.h2>
        <motion.div
          ref={elRef}
          variants={aboutVariants}
          initial="init"
          animate={controls}
          className="col-start-2 rounded-2xl bg-indigo-700/50 p-4"
        >
          <p className=" mb-4">
            Hi! My name is shundee and I enjoy building things for the web. I
            did a level 3 software & programming course a few years ago and I
            still remember the feeling of printing "hello world" for the first
            time using C++.
          </p>
          <p className=" mb-4">
            Fast forward a few years I'm now able to build entire Websites using
            all sorts cool technologies. That course taught me the basics, but
            most of my current coding skills I have taught myself with the help
            of the internet and practice.
          </p>
          <p className=" mb-4">
            Recenlty I had the pleasure of working at a software company in
            London. In the future, I hope for the opportunity to be part of
            larger, more meaningful projects and to become an expert in
            Javascript as well as learn Python while i'm at it.
          </p>
        </motion.div>
        <motion.h2
          ref={elRef}
          variants={aboutVariants}
          initial="init"
          animate={controls}
          className=" col-span-3 col-start-1 mx-auto mt-4 mb-4  text-left font-mono text-xl text-white md:col-span-1 md:row-span-1 md:row-start-2 md:text-4xl"
        >
          Skills <hr className="border-fuchsia-900"></hr>
        </motion.h2>
        <motion.div
          ref={elRef}
          variants={aboutVariants}
          initial="init"
          animate={controls}
          className="col-span-3 col-start-1  mb-10 mt-24 md:col-span-1 md:row-span-3 md:row-start-4 md:-mt-72 lg:-mt-24"
        >
          <Slider />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default React.forwardRef(AboutMe)
//  <div>
//       {/* skills */}
//     </div>
