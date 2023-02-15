import React from 'react'
import HomeContainer from '../Content/HomeContainer'
import Profile from '../Content/Profile'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <HomeContainer />
      <Profile />
      <div style={{
        height:"60vh",
      }}></div>
    </div>
  )
}

export default Home