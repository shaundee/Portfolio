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
    // document.body.style.overflow = 'hidden'      document.body.style.overflow = 'scroll'
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
        className="absolute h-[180px] w-[180px] rounded-full border-t-[6px] border-l-[6px] border-fuchsia-900  "
        animate={{ scale: [0, 1, 1, 1, 1, 2, 0], rotate: 360 }}
        transition={spinTransition}
      ></motion.div>

      <motion.div
        className="rounded-full border-8 border-transparent"
        animate={{ scale: [0, 1, 1, 1, 1, 1, 0] }}
        transition={growTransition}
      >
        <div className="relative  flex h-[150px] w-[150px] rounded-full duration-200 ease-in  ">
          <Image src={logo} className="mx-auto rounded-full " />
        </div>
      </motion.div>
    </div>
  )
}

export default InitialLoader
