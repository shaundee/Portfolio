import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import NavBar from './NavBar'

const ParticlesBG = () => {
  const particlesInit = async (main) => {
    console.log(main)
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }

  return (
    <div className="">
      <Particles
        className="h-screen"
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
              value: '#930000',
            },

            links: {
              color: {
                value: '#000000',
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
              speed: 4,
              warp: true,
            },
            number: {
              density: {
                enable: true,
              },
              value: 70,
              limit: 200,
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
              value: 4,

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
