import Head from 'next/head'
import Image from 'next/image'
import ParticlesBG from '../components/ParticlesBG'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'

import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import { Typewriter } from 'react-simple-typewriter'
import Contact from '../components/Contact'
import { useEffect, useRef, useState } from 'react'
import { GiFlamingArrow } from 'react-icons/gi'
import { useRecoilState, useRecoilValue } from 'recoil'
import { directionState, showLoaderState } from '../atoms/elementRefAtoms'
import InitialLoader from '../components/InitialLoader'
import { motion } from 'framer-motion'

const Home = () => {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)
  const homeRef = useRef(null)

  const [showLoader, setLoader] = useRecoilState(showLoaderState)

  return showLoader === false ? (
    <div className={`select-none font-serif`} ref={homeRef}>
      <Head>
        <title>Shaundee Wilson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar ref={[projectsRef, aboutRef, workRef, contactRef, homeRef]} />

      <main className="">
        <ParticlesBG />
        <Projects ref={projectsRef} />
        <AboutMe ref={aboutRef} />
        <Experience ref={workRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  ) : (
    <InitialLoader />
  )
}

export default Home
