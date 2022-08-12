import Image from 'next/image'
import React, { useEffect } from 'react'
import logo from '../public/logo.jpg'
import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil'
import { showLoaderState } from '../atoms/elementRefAtoms'

const spinTransition = {
  duration: 2,
  ease: 'linear',
}
const growTransition = {
  duration: 2,
  ease: 'linear',
}
const InitialLoader = () => {
  const [showLoader, setLoader] = useRecoilState(showLoaderState)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [showLoader])

  return (
    <div
      className={`${
        showLoader && 'overflow-hidden scrollbar-hide'
      }relative flex h-screen items-center justify-center bg-black/50`}
    >
      <motion.div
        className="absolute h-[100px] w-[100px] rounded-full border-t-[6px] 
        border-l-[6px] border-fuchsia-900 md:h-[120px] md:w-[120px]  "
        animate={{ scale: [0, 1, 1, 1, 1, 2, 0], rotate: 360 }}
        transition={spinTransition}
      ></motion.div>

      <motion.div
        className="rounded-full border-8 border-transparent"
        animate={{ scale: [0, 0, 0, 1, 1, 1, 1, 1, 0] }}
        transition={growTransition}
      >
        <div
          className="relative flex h-[80px] w-[80px] rounded-full duration-200
         ease-in md:h-[150px] md:w-[150px]  "
        >
          <Image src={logo} className="mx-auto rounded-full " />
        </div>
      </motion.div>
    </div>
  )
}

export default InitialLoader
