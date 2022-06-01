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
    <div ref={ref} className=" aboutme__Container ">
      <motion.div
        ref={elRef}
        variants={aboutVariants}
        initial="init"
        animate={controls}
        className=" mx-auto grid grid-cols-1 px-2 text-left md:grid-cols-2 xl:max-w-7xl xl:pr-[4rem]"
      >
        <motion.h1
          ref={elRef}
          variants={aboutVariants}
          initial="init"
          animate={controls}
          className="aboutme__Header "
        >
          A bit About Me
          <hr className="w-2/4 self-center border-fuchsia-900 md:self-end"></hr>
        </motion.h1>
        <motion.div
          ref={elRef}
          variants={aboutVariants}
          initial="init"
          animate={controls}
          className="col-start-2 rounded-2xl bg-emerald-500/50 p-4"
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
          className="skills__Header"
        >
          Skills <hr className="border-fuchsia-900"></hr>
        </motion.h2>
        <motion.div
          ref={elRef}
          variants={aboutVariants}
          initial="init"
          animate={controls}
          className="skills"
        >
          <Slider />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default React.forwardRef(AboutMe)
