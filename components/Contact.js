import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
const contactVariants = {
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
    },
  },
}
const Contact = (props, ref) => {
  const [elRef, inView] = useInView()
  const controls = useAnimation()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  return (
    <div ref={ref} className="contact__Container">
      <motion.h1
        ref={elRef}
        variants={contactVariants}
        initial="init"
        animate={controls}
        className="contact__Header"
      >
        Contact Me
      </motion.h1>
      <motion.p
        ref={elRef}
        variants={contactVariants}
        initial="init"
        animate={controls}
        className=" contact__TextContainer"
      >
        want to get in touch? Or just want to say hi? Then go ahead.
      </motion.p>
      <Link href="mailto:shawndeewilson@hotmail.co.uk">
        <motion.button
          ref={elRef}
          variants={contactVariants}
          initial="init"
          animate={controls}
          title="Email Me"
          className="contact__button"
        >
          Say Hello!
        </motion.button>
      </Link>
    </div>
  )
}

export default React.forwardRef(Contact)
