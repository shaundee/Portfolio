import Head from 'next/head'
import Image from 'next/image'
import ParticlesBG from '../components/ParticlesBG'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import me from '../public/me.jpg'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Typewriter from 'typewriter-effect'
import Contact from '../components/Contact'
import { useEffect, useRef } from 'react'

const Home = () => {
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const workRef = useRef(null)
  const contactRef = useRef(null)
  const homeRef = useRef(null)

  return (
    <div id="home" className="  font-serif">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar ref={[projectsRef, aboutRef, workRef, contactRef, homeRef]} />

      <div className="absolute left-2/4 top-2/4 h-[150px] w-[150px] -translate-x-2/4 -translate-y-2/4 rounded-full border-2 border-[#930000] md:h-[300px] md:w-[300px]">
        <Image src={me} className=" rounded-full" />
        <div className="typeWriter mt-4 ">
          <Typewriter
            options={{
              strings: [
                'Hi! my name is shundee wilson',
                'I make web applications with a focus on full-stack development',
              ],
              autoStart: true,
              loop: true,
              skipAddStyles: false,
            }}
          />
        </div>
      </div>
      <ParticlesBG />
      <main className="">
        <Projects ref={projectsRef} />
        <AboutMe ref={aboutRef} />
        <Experience ref={workRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  )
}

export default Home
