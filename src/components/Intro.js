import React, { } from 'react'
import Header from './Header'

const Intro = (() => {
  return (
    <div>
        <div className='header flex-center'>
        <Header />
        </div>

        <div className='intro-container flex-center'>
        <div className='name-effect'>
          <h3 className='rotate'>
            <span>R</span>
            <span>a</span>
            <span>u</span>
            <span>l</span>
            <span className='span-space'></span>
            <span>O</span>
            <span>r</span>
            <span>b</span>
            <span>a</span>
            <span>n</span>
            </h3>
        </div>
        <p>Full Stack Web Developer</p>
        </div>
    </div>
    


    
  )
})

export default Intro