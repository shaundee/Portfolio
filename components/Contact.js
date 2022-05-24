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
    <div
      ref={ref}
      id="contact"
      className="flex h-[100vh] flex-col justify-center  bg-slate-900 bg-[url('../public/backDrops/TREE.jpg')] bg-auto bg-center  px-4 bg-blend-darken "
    >
      <motion.h1
        ref={elRef}
        variants={contactVariants}
        initial="init"
        animate={controls}
        className="mx-auto mb-10 border-b border-fuchsia-900 px-4 text-center text-xl font-semibold text-white md:text-4xl"
      >
        Contact Me
      </motion.h1>
      <motion.p
        ref={elRef}
        variants={contactVariants}
        initial="init"
        animate={controls}
        className=" mx-auto mb-8 flex  h-[200px] w-[200px]  items-center rounded-full  border-t-[6px] border-l-[6px] border-fuchsia-900 bg-indigo-700/50 bg-cyan-900 p-8 text-center
      text-xl  md:h-[300px] md:w-[300px]"
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
          className=" w-48 self-center rounded-md border-2 border-fuchsia-900 p-4 transition ease-in-out hover:border-emerald-300 hover:bg-indigo-500/30"
        >
          say hello!
        </motion.button>
      </Link>
    </div>
  )
}

export default React.forwardRef(Contact)
