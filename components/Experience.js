import { useAnimation } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import experienceBg from '../public/experienceBg.webp'
import { motion } from 'framer-motion'

const experienceVariants = {
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
const Experience = (props, ref) => {
  const controls = useAnimation()
  const [elRef, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <div ref={ref} className="experience__Container ">
      <motion.h1
        ref={elRef}
        variants={experienceVariants}
        initial="init"
        animate={controls}
        className="experience__Header mx-auto"
      >
        Work
        <hr className="w-[200%] self-center border-fuchsia-900 md:self-start "></hr>
      </motion.h1>
      <motion.div
        ref={elRef}
        variants={experienceVariants}
        initial="init"
        animate={controls}
        className=" relative mx-auto mb-20 grid grid-cols-1  md:grid-cols-2 xl:max-w-7xl  xl:pr-16"
      >
        <div className="experience__TextContainer ">
          <p>Dates: 01-08-2021 - 04-02-2022 </p>
          <p>Organisation: IT Jack LTD</p>
          <p>Position: IT assistant</p>
          <p>
            Duties: I worked remotely with IT consultants and assisted with
            maintaining and creating websites using HTML, CSS and Javascript.
          </p>
        </div>

        <div className=" max-w-[30rem] rounded-2xl md:col-start-2 md:row-start-1 md:mx-auto md:max-w-6xl ">
          <Image className=" rounded-2xl" src={experienceBg} />
        </div>
      </motion.div>
    </div>
  )
}

export default React.forwardRef(Experience)
