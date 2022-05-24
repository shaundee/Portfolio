import Particles from 'react-tsparticles'
import { useRecoilState } from 'recoil'
import { loadFull } from 'tsparticles'
import { showLoaderState } from '../atoms/elementRefAtoms'
import NavBar from './NavBar'
import { motion } from 'framer-motion'
import me from '../public/me.jpg'
import logo from '../public/logo.jpg'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'

const spinTransition = {
  duration: 4,
  ease: 'linear',
}
const growTransition = {
  duration: 1,
}
const animateVariants = {
  init: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      type: 'spring',
      mass: 8,
      damping: 50,
      stiffness: 180,
      delay: 1,
    },
  },
}
const ParticlesBG = () => {
  const particlesInit = async (main) => {
    console.log(main)
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  const particlesLoaded = (container) => {}
  const [showLoader, setLoader] = useRecoilState(showLoaderState)
  return (
    <div className=" flex h-screen w-screen items-center justify-center ">
      <motion.div
        className="absolute z-10 flex h-[180px] w-[180px] -translate-x-2/4 rounded-full border-b-[6px] border-l-[6px] border-emerald-300
         bg-slate-900/50  hover:border-fuchsia-900  hover:bg-slate-900/0 hover:duration-300 hover:ease-in-out"
        animate={{ scale: 1 }}
        transition={spinTransition}
      ></motion.div>

      <motion.div
        className="relative  flex   rounded-full border-8 border-transparent  "
        animate={{ scale: [0, 1] }}
        transition={growTransition}
      >
        <div className="relative  flex h-[150px] w-[150px] rounded-full   ">
          <Image
            src={me}
            objectFit="contain"
            className="mx-auto rounded-full "
          />
        </div>
      </motion.div>

      {!showLoader && (
        <motion.div
          variants={animateVariants}
          initial="init"
          animate="visible"
          className="Typewriter"
        >
          <Typewriter
            words={[
              'Hi! my name is shundee wilson',
              'I am a web developer with a passion for front-end development',
              'I love seeing my ideas come to life on the web',
            ]}
            loop={true}
            cursor
            cursorStyle=".."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.div>
      )}

      <Particles
        className="absolute -z-10 h-screen w-screen"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: 'transparent',
            },
            position: '50% 50%',
            repeat: 'no-repeat',
            size: 'cover',
          },

          fullScreen: {
            enable: false,
            zIndex: -1,
          },

          interactivity: {
            detectsOn: 'window',

            events: {
              onClick: {
                mode: 'push',
                enable: true,
              },

              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },

            modes: {
              grab: {
                distance: 200,
              },
              repulse: {
                distance: 154,
                divs: {
                  distance: 200,
                  duration: 0.4,
                  factor: 100,
                  speed: 1,
                  maxSpeed: 50,
                  easing: 'ease-out-quad',
                  selectors: [],
                },
              },
            },
          },
          particles: {
            color: {
              value: '#6ee7b7',
            },

            links: {
              color: {
                value: '#ffffff',
              },
              distance: 125,
              enable: true,
              warp: true,
              opacity: 0.4,
              width: 2,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              outModes: {
                bottom: 'out',
                left: 'out',
                right: 'out',
                top: 'out',
              },
              speed: 2,
              warp: true,
            },
            number: {
              density: {
                enable: true,
              },
              value: 70,
              limit: 150,
            },
            opacity: {
              value: 1,
              animation: {
                speed: 1,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: 3,

              animation: {
                speed: 20,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default ParticlesBG
