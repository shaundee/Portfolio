import Image from 'next/image'
import netflix from '../public/netflix.png'
import APOD from '../public/APOD.png'
import spotify from '../public/spotify.png'
import Link from 'next/link'
import { projectsState } from '../atoms/elementRefAtoms'
import { useRecoilState } from 'recoil'
import React, { useEffect, useRef } from 'react'
import scrollToSection from '../lib/scrollTo'

const Projects = (props, ref) => {
  return (
    <div
      ref={ref}
      className=" mb-20  flex items-center justify-center  px-2 md:h-screen md:px-4 md:pl-40 xl:pl-40 xl:pr-20"
    >
      <div className="  grid w-full grid-cols-1 gap-4 md:max-w-full md:grid-cols-3  ">
        <h1 className="col-span-full mb-10 text-left text-4xl font-semibold text-lime-400">
          Things I've built <hr className="w-2/4"></hr>
        </h1>
        <div className="nasa_apod  mx-auto rounded-2xl bg-indigo-700 px-2">
          <h1 className="  rounded-2xl p-4 text-center text-base text-[#e2e04a] ">
            NASA-APOD
          </h1>

          <Image
            className=" rounded-2xl opacity-60 transition-all ease-in hover:cursor-pointer hover:opacity-100 "
            src={APOD}
          />

          <p className=" rounded-2xl p-4 text-center text-base ">
            Discover the cosmos with the Nasa Astronomy Picture of the day.
            Everyday A majestic new image or video gets featured along with Link
            breif description. have Link look at your most recent birthday.
            enjoy the eye candy!
          </p>
        </div>

        <div className="spotify mx-auto rounded-2xl bg-indigo-700 px-2  ">
          <h1 className=" rounded-2xl p-4 text-center text-base text-[#e2e04a] ">
            Spotify-Clone
          </h1>

          <Image
            className=" rounded-2xl opacity-60 transition-all ease-in hover:cursor-pointer hover:opacity-100 "
            src={spotify}
          />

          <p className="   rounded-2xl p-4 text-center text-base ">
            As the name states this a spotify clone built with the spotiy API
            and follows the spotify oauth flow for full user authentication. It
            functions more like a remote control for the main spotify
            application, in fact it woudn't even function unless you have the
            main app open.
          </p>
        </div>
        <div className="netflix mx-auto rounded-2xl bg-indigo-700 px-2">
          <h1 className=" rounded-2xl p-4 text-center text-base text-[#e2e04a]  ">
            Netflix-Clone
          </h1>

          <Image
            className="rounded-2xl opacity-60 transition-all ease-in hover:cursor-pointer hover:opacity-100 "
            src={netflix}
          />

          <p className="  rounded-2xl p-4  text-center text-base">
            A netflix clone with an amazing UI and uses firebase for full user
            authentication as well as stripe for payment transactions. Also
            utilizes the TMDB API for the all the data which is all rendered
            server-side using next.js.
          </p>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Projects)
