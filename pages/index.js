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
// let closeToEndOfPage = 3400
const Home = () => {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)
  const homeRef = useRef(null)

  const [showLoader, setLoader] = useRecoilState(showLoaderState)
  const [pageEnd, setPageEnd] = useState('')

  const endOfPage = () => {
    if (window.pageYOffset > 3400) {
      setPageEnd('closeToEndOfPage')
      console.log('close TO End')
    } else {
      setPageEnd('hide')
    }
  }
  useEffect(() => {
    document.addEventListener('scroll', endOfPage)
    return () => {
      document.removeEventListener('scroll', endOfPage)
    }
  }, [])

  return showLoader === false ? (
    <div
      className={`${
        showLoader && 'overflow-hidden'
      }select-none overflow-hidden font-serif`}
      ref={homeRef}
    >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!showLoader && (
        <NavBar ref={[projectsRef, aboutRef, workRef, contactRef, homeRef]} />
      )}

      <main className="">
        <ParticlesBG />
        <Projects ref={projectsRef} />
        <AboutMe ref={aboutRef} />
        <Experience ref={workRef} />
        <Contact ref={contactRef} />
      </main>
      <div
        onClick={() =>
          window.scrollTo({
            top: homeRef?.current.offsetTop,
            behavior: 'smooth',
          })
        }
        title="Back to top"
        className={`${
          pageEnd === 'closeToEndOfPage' && 'bottom-6 '
        } fixed left-2/4 -bottom-16 z-50 flex h-10 w-10 -translate-x-2/4 items-center justify-center rounded-full bg-black text-fuchsia-900 duration-300 hover:cursor-pointer hover:text-emerald-300`}
      >
        <GiFlamingArrow className=" h-8 w-8 -rotate-[135deg] " />
      </div>
    </div>
  ) : (
    <InitialLoader />
  )
}

export default Home
