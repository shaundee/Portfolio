import Head from 'next/head'
import Image from 'next/image'
import ParticlesBG from '../components/ParticlesBG'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import me from '../public/me.jpg'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Typewriter from 'typewriter-effect'

const Home = () => {
  return (
    <div id="home" className="  pb-4 font-serif ">
      <ParticlesBG />
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />

      <div className="absolute left-2/4 top-2/4 h-[200px] w-[200px] -translate-x-2/4 -translate-y-2/4  rounded-full border-2 border-[#930000]  md:h-[300px] md:w-[300px]">
        <Image src={me} className=" rounded-full" />
        <p className="typeWriter mt-4 ">
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
        </p>
      </div>

      <main>
        <Projects />
        <AboutMe />
        <Experience />
      </main>
    </div>
  )
}

export default Home
