import Image from 'next/image'
import React from 'react'
import experienceBg from '../public/experienceBg.webp'

const Experience = () => {
  return (
    <div
      id="experience"
      className="mb-4 flex h-screen flex-col justify-center px-4 md:px-20 md:pl-40 md:text-lg lg:px-20 lg:pl-40 lg:text-xl xl:max-w-full xl:pl-80 xl:text-2xl"
    >
      <div className=" relative mx-auto mb-4 grid grid-cols-1 md:grid-cols-2 xl:max-w-7xl ">
        <div className="absolute left-28 top-2/4 z-10 -translate-y-2/4 pr-4 text-right ">
          <h2 className="mb-5 pr-4 text-right  text-4xl font-semibold  text-lime-400 md:col-span-2 ">
            Experience
          </h2>
          <p>Dates: 01-08-2021 - 04-02-2022 </p>
          <p>Organisation: IT Jack LTD</p>
          <p>Position: IT assistant</p>
          <p>
            Duties: I worked remotely with IT consultants and assisted with
            maintaining and creating websites using HTML, CSS and Javascript.
          </p>
        </div>

        <div className="relative mx-auto max-w-[30rem] rounded-2xl md:row-start-1 md:max-w-6xl">
          <Image className=" rounded-2xl" src={experienceBg} />
        </div>
      </div>
      <div className="flex justify-center">
        <p> want to get in touch? Or just want to say hello? Then go ahead.</p>
        <button className="m-auto mb-8 rounded-2xl bg-red-900 p-4">
          Message me!
        </button>
      </div>
    </div>
  )
}

export default Experience
