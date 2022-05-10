import React from 'react'
import Slider from './Slider'

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className=" mb-4 flex h-screen flex-col justify-center px-4 md:pl-40 md:text-lg lg:text-xl  xl:max-w-full xl:px-80 xl:text-2xl"
    >
      <div className=" mx-auto grid grid-cols-1 text-left md:grid-cols-2 xl:max-w-7xl">
        <h2 className=" mb-5 text-left text-4xl font-semibold text-lime-400 md:col-span-2">
          A bit About Me
        </h2>
        <p className="col-start-1 mb-4  ">
          Hi! my name is shundee and I spend way too much time at my computer. I
          enjoy building things for the web I'm a logical thinking individual
          that has a talent for picking up and learning new technologies quite
          quickly.
        </p>
        <p className="col-start-1 mb-4">
          Though I learnt the basics of programming during my college years,
          most of my current programming skills I have taught myself with the
          help of the internet and some good practice.
        </p>

        <p className="col-start-1 mb-4">
          Recenlty I had the pleasure of working at a software company in
          London. In the future I hope for the opportunity to be part of larger,
          more meaningful projects and to become an expert in Javascript and
          Python.
        </p>
        <div className="col-start-2 row-span-3 row-start-2 flex items-center">
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
//  <div>
//       {/* skills */}
//     </div>
