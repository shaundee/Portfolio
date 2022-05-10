import React from 'react'
import Typewriter from 'typewriter-effect'

const test = () => {
  return (
    <div>
      <p className="typeWriter">
        <Typewriter
          options={{
            strings: ['Hello World gog ogog gooogo googog'],
            autoStart: true,
            loop: true,
            skipAddStyles: false,
          }}
        />
      </p>
    </div>
  )
}

export default test
