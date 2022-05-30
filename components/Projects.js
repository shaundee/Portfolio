import Image from 'next/image'
import netflix from '../public/netflix.png'
import APOD from '../public/APOD.png'
import spotify from '../public/spotify.png'
import Link from 'next/link'
import { projectsState } from '../atoms/elementRefAtoms'
import { useRecoilState } from 'recoil'
import React, { useEffect, useRef } from 'react'
import scrollToSection from '../lib/scrollTo'
import { RiGithubLine } from 'react-icons/ri'
import { MdOutlineOpenInNew } from 'react-icons/md'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const projectVariants = {
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
const h1Variant = {
  init: {
    opacity: 0,
    y: '2vh',
  },
  h1Visible: {
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

const Projects = (props, ref) => {
  const controls = useAnimation()
  const h1Controls = useAnimation()
  const [elRef, inView] = useInView()
  const [h1ElRef, h1InView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
    if (h1InView) {
      h1Controls.start('h1Visible')
    }
  }, [controls, inView, h1Controls, h1InView])

  return (
    <div
      ref={ref}
      className=" flex flex-col items-center justify-center bg-auto bg-bottom px-4 bg-blend-darken md:py-8 md:px-4 "
    >
      <motion.h1
        ref={h1ElRef}
        variants={h1Variant}
        initial="init"
        animate={h1Controls}
        className={`mb-10 flex flex-col px-8 text-left font-mono text-2xl font-semibold text-white md:self-start md:text-4xl lg:pl-40`}
      >
        Personal Projects & Clones{' '}
        <hr className="w-[110%] self-center border-fuchsia-900 md:w-[125%] md:self-start"></hr>
      </motion.h1>

      <motion.div
        ref={elRef}
        variants={projectVariants}
        initial="init"
        animate={controls}
        className="grid grid-cols-1 gap-4 p-8 md:grid-cols-3"
      >
        <motion.div
          variants={projectVariants}
          className="col flex flex-col justify-between bg-indigo-700/50 "
        >
          <h2 className="projectHeaders ">
            <a
              href="https://github.com/shaundee/Nasa-APOD"
              alt="Github"
              title="Github"
              target="blank"
            >
              <RiGithubLine className="projectIcons" />
            </a>
            NASA-APOD
            <a
              href="https://nasa-apod-smoky.vercel.app/"
              alt="Open Externally"
              title="Open Externally"
              target="blank"
            >
              <MdOutlineOpenInNew className="projectIcons" />
            </a>
          </h2>
          <div className="projectBodies bg-[url('../public/APOD.png')] md:bg-none">
            <Link href="https://nasa-apod-smoky.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="mb-4 hidden md:inline"
              >
                <Image className="projectImage" src={APOD} />
              </motion.div>
            </Link>
            <p className="  ">
              Discover the cosmos with the Nasa Astronomy Picture of the day.
              Everyday A majestic new image or video gets featured along with a
              brief description. Have a look at your most recent birthday. Enjoy
              the eye candy!
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={projectVariants}
          className="col flex flex-col justify-between bg-indigo-700/50"
        >
          <h2 className="projectHeaders ">
            <a
              href="https://github.com/shaundee/spotify-API-build"
              alt="Github"
              title="Github"
              target="blank"
            >
              <RiGithubLine className="projectIcons" />
            </a>
            Spotify-Clone
            <a
              href="https://spotify-sooty.vercel.app/login"
              alt="Open Externally"
              title="Open Externally"
              target="blank"
            >
              <MdOutlineOpenInNew className="projectIcons" />
            </a>
          </h2>
          <div className="projectBodies bg-[url('../public/spotify.png')] bg-cover bg-left md:bg-none ">
            <Link href="https://spotify-sooty.vercel.app/login">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="mb-4 hidden md:inline"
              >
                <Image className="projectImage" src={spotify} />
              </motion.div>
            </Link>
            <p className="  ">
              As the name states this a spotify clone built with the spotiy API
              and follows the spotify oauth flow for full user authentication.
              It functions more like a remote control for the main spotify
              application.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={projectVariants}
          className=" col flex flex-col justify-between bg-indigo-700/50"
        >
          <h2 className="projectHeaders">
            <a
              href="https://github.com/shaundee/netflix-clone"
              alt="Github"
              title="Github"
              target="blank"
            >
              <RiGithubLine className="projectIcons" />
            </a>
            Netflix-Clone
            <a
              href="https://netflix-clone-shaundee.vercel.app/"
              alt="Open Externally"
              title="Open Externally"
              target="blank"
            >
              <MdOutlineOpenInNew className="projectIcons" />
            </a>
          </h2>
          <div className="projectBodies bg-[url('../public/netflix.png')] bg-left-top md:bg-none">
            <Link href="https://netflix-clone-shaundee.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="mb-4 hidden md:inline"
              >
                <Image className="projectImage " src={netflix} />
              </motion.div>
            </Link>
            <p className="  ">
              A netflix clone with an amazing UI and uses firebase for full user
              authentication as well as stripe for payment transactions. Also
              utilizes the TMDB API for the all the data which is all rendered
              server-side using Next.js.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default React.forwardRef(Projects)
