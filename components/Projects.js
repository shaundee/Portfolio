import Image from 'next/image'
import netflix from '../public/netflix.png'
import APOD from '../public/APOD.png'
import spotify from '../public/spotify.png'
import animeDojo from '../public/Anime-dojo.png'
import Link from 'next/link'
import React, { useEffect } from 'react'
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
      className=" flex flex-col  bg-auto bg-bottom px-4 bg-blend-darken md:py-8 md:px-4 "
    >
      <motion.h1
        ref={h1ElRef}
        variants={h1Variant}
        initial="init"
        animate={h1Controls}
        className="project__Header mx-auto"
      >
        Personal Projects & Clones
        <hr className="w-[110%] self-center border-fuchsia-900 md:w-[125%] md:self-start"></hr>
      </motion.h1>

      <motion.div
        ref={elRef}
        variants={projectVariants}
        initial="init"
        animate={controls}
        className=" mx-auto grid grid-cols-1 gap-4 p-8  md:row-span-full md:grid-cols-2 xl:w-[80vw] xl:text-2xl"
      >
        {/* Nasa-APOD */}
        <motion.div
          variants={projectVariants}
          className="col flex  flex-col justify-between bg-emerald-500/50 "
        >
          <h2 className="project__Headers ">
            <a
              href="https://github.com/shaundee/Nasa-APOD"
              alt="Github"
              title="Github"
              target="blank"
            >
              <RiGithubLine className="project__Icons" />
            </a>
            NASA-APOD
            <a
              href="https://nasa-apod-smoky.vercel.app/"
              alt="Open Externally"
              title="Open Externally"
              target="blank"
            >
              <MdOutlineOpenInNew className="project__Icons" />
            </a>
          </h2>
          <div className="project__Bodies bg-[url('../public/APOD.png')] md:bg-none">
            <Link href="https://nasa-apod-smoky.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="mb-4 hidden md:inline"
              >
                <Image className="project__Image" src={APOD} />
              </motion.div>
            </Link>
            <p className="text-center">
              Discover the cosmos with the Nasa Astronomy Picture of the day.
              Everyday A majestic new image or video gets featured along with a
              brief description. Have a look at your most recent birthday. Enjoy
              the eye candy!
            </p>
          </div>
        </motion.div>

        {/* Spotify */}
        <motion.div
          variants={projectVariants}
          className="col flex  flex-col justify-between bg-emerald-500/50 "
        >
          <h2 className="project__Headers ">
            <a
              href="https://github.com/shaundee/spotify-API-build"
              alt="Github"
              title="Github"
              target="blank"
            >
              <RiGithubLine className="project__Icons" />
            </a>
            Spotify-Clone
            <a
              href="https://spotify-sooty.vercel.app/login"
              alt="Open Externally"
              title="Open Externally"
              target="blank"
            >
              <MdOutlineOpenInNew className="project__Icons" />
            </a>
          </h2>
          <div className="project__Bodies bg-[url('../public/spotify.png')] bg-cover bg-left md:bg-none ">
            <Link href="https://spotify-sooty.vercel.app/login">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="mb-4 hidden md:inline"
              >
                <Image className="project__Image" src={spotify} />
              </motion.div>
            </Link>
            <p className=" text-center ">
              As the name states this a spotify clone built with the spotiy API
              and follows the spotify oauth flow for full user authentication.
              It functions more like a remote control for the main spotify
              application.
            </p>
          </div>
        </motion.div>

        {/* Netflix */}
        <motion.div
          variants={projectVariants}
          className=" col flex  flex-col justify-between bg-emerald-500/50 "
        >
          <h2 className="project__Headers">
            <a
              href="https://github.com/shaundee/netflix-clone"
              alt="Github"
              title="Github"
              target="blank"
            >
              <RiGithubLine className="project__Icons" />
            </a>
            Netflix-Clone
            <a
              href="https://netflix-clone-shaundee.vercel.app/"
              alt="Open Externally"
              title="Open Externally"
              target="blank"
            >
              <MdOutlineOpenInNew className="project__Icons" />
            </a>
          </h2>
          <div className="project__Bodies bg-[url('../public/netflix.png')] bg-left-top md:bg-none">
            <Link href="https://netflix-clone-shaundee.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="mb-4 hidden md:inline"
              >
                <Image className="project__Image " src={netflix} />
              </motion.div>
            </Link>
            <p className="text-center">
              A netflix clone with an amazing UI and uses firebase for full user
              authentication as well as stripe's payments system for testing
              purposes. Also utilizes the TMDB API for the all the data which is
              all rendered server-side using Next.js.
            </p>
          </div>
        </motion.div>

        {/* Anime-Dojo */}
        <motion.div
          variants={projectVariants}
          className=" col  flex   flex-col bg-emerald-500/50 "
        >
          <h2 className="project__Headers">
            <a
              href="https://github.com/shaundee/AniDojo"
              alt="Github"
              title="Github"
              target="blank"
            >
              <RiGithubLine className="project__Icons" />
            </a>
            Anime-Dojo
            <a
              href="https://anime-dojo.vercel.app/"
              alt="Open Externally"
              title="Open Externally"
              target="blank"
            >
              <MdOutlineOpenInNew className="project__Icons" />
            </a>
          </h2>
          <div className="project__Bodies bg-[url('../public/Anime-dojo.png')] bg-bottom md:bg-none">
            <Link href="https://anime-dojo.vercel.app/">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="mb-4 hidden md:inline"
              >
                <Image className="project__Image " src={animeDojo} />
              </motion.div>
            </Link>
            <p className="text-center">
              A basic anime site where you can view anime by categories like
              trending etc. You can also the trailers for each anime if it's
              available Utilizes the Kitsu API database along with Next.js's
              server-side rendering. Recoil is used for state management.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default React.forwardRef(Projects)
