import Image from 'next/image'
import netflix from '../public/netflix.png'
import APOD from '../public/APOD.png'
import spotify from '../public/spotify.png'

const Projects = () => {
  return (
    <div
      id="projects"
      className=" mb-4  flex h-screen items-center px-4 md:pl-40 xl:px-40"
    >
      <div className="mx-auto grid max-w-lg grid-cols-1 gap-2 md:max-w-4xl md:grid-cols-3 xl:max-w-7xl xl:grid-cols-2 ">
        <h1 className="col-span-full mx-auto mb-20 text-4xl font-semibold text-lime-400">
          Some things I've built
        </h1>
        <div className="nasa_apod mx-auto rounded-2xl ">
          <h1 className="  rounded-2xl p-4 text-center text-base hover:text-[#e2e04a] hover:underline">
            NASA-APOD
          </h1>
          <a href="https://nasa-apod-smoky.vercel.app/" target="_blank">
            <Image
              className=" rounded-2xl opacity-80 transition-all ease-in hover:opacity-100 "
              src={APOD}
            />
          </a>

          <a href="https://nasa-apod-smoky.vercel.app/" target="_blank"></a>
          <p className=" rounded-2xl p-4 text-center text-base ">
            Discover the cosmos with the Nasa Astronomy Picture of the day.
            Everyday A majestic new image or video gets featured along with a
            breif description. have a look at your most recent birthday. enjoy
            the eye candy!
          </p>
        </div>

        <div className="spotify mx-auto rounded-2xl ">
          <h1 className=" rounded-2xl p-4 text-center text-base hover:text-[#e2e04a] hover:underline">
            Spotify-Clone
          </h1>
          <a
            href="https://spotify-46qepr57d-shaundee.vercel.app/login?callbackUrl=https://spotify-46qepr57d-shaundee.vercel.app&error=OAuthCallback"
            target="_blank"
          >
            <Image
              className=" rounded-2xl opacity-80 transition-all ease-in hover:opacity-100"
              src={spotify}
            />
          </a>
          <a
            href="https://spotify-46qepr57d-shaundee.vercel.app/login?callbackUrl=https://spotify-46qepr57d-shaundee.vercel.app&error=OAuthCallback"
            target="_blank"
          ></a>
          <p className="   rounded-2xl p-4 text-center text-base ">
            As the name states this a spotify clone built with the spotiy API
            and follows the spotify oauth flow for full user authentication. It
            functions more like a remote control for the main spotify
            application, in fact it woudn't even function unless you have the
            main app open.
          </p>
        </div>
        <div className="netflix mx-auto rounded-2xl ">
          <h1 className=" rounded-2xl p-4 text-center text-base hover:text-[#e2e04a] hover:underline ">
            Netflix-Clone
          </h1>
          <a
            href="https://netflix-clone-pied-seven.vercel.app/"
            target="_blank"
          >
            <Image
              className="rounded-2xl opacity-80 transition-all ease-in hover:opacity-100"
              src={netflix}
            />
          </a>
          <a
            href="https://netflix-clone-pied-seven.vercel.app/"
            target="_blank"
          ></a>
          <p className="  rounded-2xl p-4  text-center text-base">
            A netflix clone with an amazing UI and uses firebase for full user
            authentication as well as stripe for payment transitions. Also
            utilizes the TMDB api for the all the data which is all rendered
            server-side using next.js.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Projects
