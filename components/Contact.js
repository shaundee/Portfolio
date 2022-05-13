import React from 'react'
import Link from 'next/link'

const Contact = (props, ref) => {
  return (
    <div
      ref={ref}
      id="contact"
      className="flex h-[100vh] flex-col  justify-center px-4"
    >
      <h1 className="mx-auto mb-10 px-4 text-center text-4xl font-semibold text-lime-400">
        Contact Me
      </h1>
      <p className=" mx-auto mb-8 flex  h-[200px] w-[200px]  items-center rounded-full bg-indigo-700 p-8 text-center text-xl md:h-[300px] md:w-[300px]">
        want to get in touch? Or just want to say hi? Then go ahead.
      </p>
      <Link href="mailto:shawndeewilson@hotmail.co.uk" targrt="blank">
        <button className=" w-48 self-center rounded-md border-2 border-indigo-500 p-4 transition ease-in-out hover:bg-indigo-500/30">
          say hello!
        </button>
      </Link>
    </div>
  )
}

export default React.forwardRef(Contact)
