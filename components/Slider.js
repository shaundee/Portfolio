import Image from 'next/image'
import React from 'react'
import css from '../public/techIcons/css.png'
import firebase from '../public/techIcons/firebase.jpg'
import html from '../public/techIcons/html.png'
import script from '../public/techIcons/script.png'
import motion from '../public/techIcons/motion.png'
import nextjs from '../public/techIcons/nextjs.webp'
import nodejs from '../public/techIcons/nodejs.png'
import reactIcon from '../public/techIcons/reactIcon.png'
import tailwind from '../public/techIcons/tailwind.png'

const Slider = () => {
  return (
    <div className="slider -mt-[100px]  w-[100px] lg:right-5 lg:w-[175px] ">
      <div className="rotator h-[100px] w-[100px] lg:h-[100px] xl:h-[120px] xl:w-[120px] ">
        <div className="items  pt-5">
          <Image className="img " src={tailwind} alt="items photo" />
        </div>
        <div className="items">
          <Image className="img " src={reactIcon} alt="items photo" />
        </div>
        <div className="items">
          <Image className="img " src={nodejs} alt="items photo" />
        </div>
        <div className="items">
          <Image className="img " src={nextjs} alt="items photo" />
        </div>
        <div className="items">
          <Image className="img " src={motion} alt="items photo" />
        </div>
        <div className="items">
          <Image className="img " src={script} alt="items photo" />
        </div>
        <div className="items">
          <Image className="img " src={html} alt="items photo" />
        </div>
        <div className="items pt-4">
          <Image className="img  pt-4 " src={firebase} alt="items photo" />
        </div>
        <div className="items">
          <Image className="img " src={css} alt="items photo" />
        </div>
      </div>
    </div>
  )
}

export default Slider
