import Image from 'next/image'
import React from 'react'
import experienceBg from '../public/experienceBg.webp'

const Experience = (props, ref) => {
  return (
    <div
      ref={ref}
      id="experience"
      className="mb-4 flex flex-col justify-center px-2 md:h-[100vh] md:text-lg lg:text-xl xl:max-w-full  xl:text-2xl"
    >
      <h1 className="mb-10 px-4 text-left text-4xl font-semibold text-lime-400 md:pl-40">
        Experience <hr className="w-2/4"></hr>
      </h1>
      <div className=" relative mx-auto mb-20 grid grid-cols-1  md:grid-cols-2 xl:max-w-full  xl:pr-16">
        <div className="absolute top-2/4 z-10 -translate-y-2/4 rounded-2xl bg-indigo-700/90 p-4 text-left md:left-32 md:max-w-md lg:max-w-xl  xl:max-w-3xl">
          <p>Dates: 01-08-2021 - 04-02-2022 </p>
          <p>Organisation: IT Jack LTD</p>
          <p>Position: IT assistant</p>
          <p>
            Duties: I worked remotely with IT consultants and assisted with
            maintaining and creating websites using HTML, CSS and Javascript.
          </p>
        </div>

        <div className=" max-w-[30rem] rounded-2xl md:col-start-2 md:row-start-1 md:mx-auto md:max-w-6xl ">
          <Image className=" rounded-2xl" src={experienceBg} />
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Experience)
