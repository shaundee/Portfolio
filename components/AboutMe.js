import React from 'react'
import Slider from './Slider'

const AboutMe = (props, ref) => {
  return (
    <div
      ref={ref}
      id="aboutMe"
      className=" mb-20 flex flex-col justify-center   md:h-[100vh] md:pl-40 md:text-lg lg:text-xl xl:max-w-full "
    >
      <div className=" mx-auto grid grid-cols-1 px-2 text-left md:grid-cols-2 xl:max-w-full xl:pr-[4rem]">
        <h2 className=" relative col-span-2 mb-10 text-right text-4xl font-semibold text-lime-400 ">
          A bit About Me<hr className="absolute right-0 w-2/4"></hr>
        </h2>
        <div className="col-start-2 rounded-2xl bg-indigo-700 p-4">
          <p className=" mb-4   ">
            Hi! my name is shundee and I spend way too much time at my computer.
            I enjoy building things for the web I'm a logical thinking
            individual that has a talent for picking up and learning new
            technologies quite quickly.
          </p>
          <p className=" mb-4">
            Though I learnt the basics of programming during my college years,
            most of my current programming skills I have taught myself with the
            help of the internet and some good practice.
          </p>
          <p className=" mb-4">
            Recenlty I had the pleasure of working at a software company in
            London. In the future I hope for the opportunity to be part of
            larger, more meaningful projects and to become an expert in
            Javascript and Python.
          </p>
        </div>

        <div className="col-start-1 row-span-3 row-start-2 flex items-center">
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(AboutMe)
//  <div>
//       {/* skills */}
//     </div>
