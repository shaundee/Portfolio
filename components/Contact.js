import React, { useEffect } from 'react'
import Link from 'next/link'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { RiGithubLine } from 'react-icons/ri'
import { MdOutlineHorizontalRule } from 'react-icons/md'
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
      <footer className="mt-52 flex w-full flex-col justify-center space-y-3 self-center">
        <p className="flex flex-col items-center  text-xs">
          Built by
          <span className="mt-2 flex gap-x-1  text-base text-emerald-300">
            <div className=" h-0.5  w-20 self-center rounded-full  bg-fuchsia-900"></div>
            Shaundee Wilson
            <div className=" h-0.5  w-20 self-center rounded-full  bg-fuchsia-900 "></div>
          </span>
        </p>

        <p className="flex flex-col items-center text-xs">
          <span className=" flex gap-x-1 text-base text-emerald-300 ">
            <div className=" h-0.5 w-40  self-center rounded-full  bg-fuchsia-900"></div>
            <a
              href="https://github.com/shaundee"
              title="GitHub Profile"
              target="blank"
            >
              <span className="flex cursor-pointer gap-1 hover:text-fuchsia-900 ">
                GitHub <RiGithubLine className="h-6 w-6 " />
              </span>
            </a>

            <div className=" h-0.5 w-40  self-center rounded-full  bg-fuchsia-900"></div>
          </span>
        </p>
      </footer>
    </div>
  )
}

export default React.forwardRef(Contact)
