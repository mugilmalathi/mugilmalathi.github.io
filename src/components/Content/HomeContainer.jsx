import React from 'react'
import { Fade } from 'react-reveal'
import Bounce from 'react-reveal/Bounce';
import "./index.scss"

const HomeContainer = () => {
  return (
    <div className='homecontainer'>
        <div>Hello I'm</div>
        <div>
            <Bounce left cascade>Mugilarasan</Bounce>
        </div>
        <div>Fullstack Developer</div>
        <div>
            <button>Resume</button>
            <button>Lets Connect</button>
        </div>
    </div>
  )
}

export default HomeContainer